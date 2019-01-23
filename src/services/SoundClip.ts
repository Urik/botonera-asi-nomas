import { Howl } from 'howler';
import { Subject } from 'rxjs';

type State = {
    name: string;

    loadSoundclip(soundClip: SoundClip): Promise<Howl>;
    play(ctx: SoundClip): Promise<number>;
    stop(ctx: SoundClip): void;
    
}

const unloadedState: State = {
    name: 'unloaded',
    
    loadSoundclip(ctx: SoundClip) {
        const soundclipLoadPromise = new Promise<Howl>((resolve, reject) => {
            const howlClip: Howl = new Howl({
                src: [ctx.soundclipUrl],
                autoplay: false,
                onload: () => resolve(howlClip),
                onloaderror: (soundId, err) => reject(err),
                onplay: () => ctx.playing$.next(true),
                onend: () => ctx.playing$.next(false),
                onstop: () => ctx.playing$.next(false)
            });
        });
        ctx.state = getLoadingState(ctx, soundclipLoadPromise);
        ctx.notifyStateChange();
        return soundclipLoadPromise.then(howlClip => {
            ctx.state = getLoadedState(howlClip);
            ctx.notifyStateChange();
            return howlClip;
        });
    },

    play(ctx) {
        ctx.loadSoundclip();
        return ctx.state.play(ctx);
    },

    stop() {
        return;
    }
};


function getLoadingState(ctx: SoundClip, loadingPromise: Promise<Howl>): State {
    return {
        name: 'loading',

        loadSoundclip() {
            return loadingPromise;
        },

        play(ctx) {
            // at this point the soundclip has been loaded, and we can call ctx.play()
            return loadingPromise.then (() => ctx.play());
        },

        stop() {
            return;
        }
    };
}

function getLoadedState(soundClip: Howl): State {
    return {
        name: 'loaded',

        loadSoundclip(ctx: SoundClip): Promise<Howl> {
            return Promise.resolve(soundClip);
        },

        play(ctx: SoundClip) {
            return Promise.resolve(soundClip.play());
        },

        stop() {
            soundClip.fade(1, 0, 200);
            new Promise((resolve, reject) => {
                setTimeout(() => soundClip.stop(), 200);
            })
        }
    }
}

export class SoundClip {
    playing$: Subject<{}>;
    state$: Subject<string>;

    state: State = unloadedState;

    constructor(public soundclipUrl: string) {
        this.soundclipUrl = soundclipUrl;
        this.state = unloadedState;

        this.playing$ = new Subject();
        this.state$ = new Subject();
    }

    notifyStateChange() {
        this.state$.next(this.state.name);
    }

    getStateName() {
        return this.state.name;
    }

    loadSoundclip() {
        return this.state.loadSoundclip(this);
    }

    play(): Promise<number> {
        return this.state.play(this);
    }
    
    stop() {
        return this.state.stop(this);
    }
}