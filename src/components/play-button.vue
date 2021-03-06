<template>
    <div :class="{ 'is-loading': this.isLoading }">
        <div class="button-icon-wrapper">
            <div class="icon centered-in-parent" v-if="this.isLoading">
                <i class="fas fa-spinner fa-spin"></i>
            </div>
            <transition name="stop-fade">
                <img v-if="this.isPlaying" @click="stopSound" class="stop-button centered-in-parent" :src="this.stopIconPath">
            </transition>
            <img class="button-icon" :src="this.imgUrl" @click="playSound" :alt="this.imgAlt">
        </div>
        {{this.name}}
    </div>
</template>

<script>
import StopIcon from '../assets/images/stop-circle-regular.svg';
import { SoundClip } from '../services/SoundClip';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export default {
    name: 'play-button',
    props: {
        name: String,
        imgUrl: String,
        audioUrl: String,
        imgAlt: String,
        autoFetch: Boolean
    },
    data: () => ({
        isLoading: false,
        isPlaying: false,
        stopIconPath: StopIcon,
        destroy$: new Subject()
    }),
    created() {
        this.soundClip = new SoundClip(this.audioUrl);
        this.soundClip.state$.pipe(takeUntil(this.destroy$)).subscribe(newState => this.isLoading = newState === 'loading');
        this.soundClip.playing$.pipe(takeUntil(this.destroy$)).subscribe((isPlaying) => {
            this.isPlaying = isPlaying;
        });
        
        if (this.autoFetch) {
            this.loadSound();
        }
    },
    destryed() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    },
    methods: {
        playSound() {
            return this.soundClip.play();
        },
        stopSound() {
            this.isPlaying = false;
            return this.soundClip.stop();
        },
        loadSound() {
            return this.soundClip.loadSoundclip();
        }
    },
    watch: {
        audioUrl(newVal) {
            this.soundClip = new SoundClip(newVal);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "bulma/sass/utilities/mixins.sass";

    .button-icon-wrapper {
        position: relative;
        
        .button-icon {
            $border-color:	hsl(171, 100%, 41%);
            display: block;
            border-radius: 50%;
            border-style: solid;
            border-width: 3px;
            background-color: $border-color;
            border-color: $border-color;
            // Used to offset the 3px of border
            width: calc(100% - 6px);
            // Used to center the img in the parent
            margin-left: auto;
            margin-right: auto;
        }

        .centered-in-parent {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }

        .stop-button {
            opacity: 0.8;
            width: 100%;
        }

        .stop-fade-enter-active, .stop-fade-leave-active {
            transition: opacity .2s;
        }
        .stop-fade-enter, .stop-fade-leave-to {
            opacity: 0;
        }
    }
</style>