const baseUrl = '';
const imagesUrl = `${baseUrl}assets/images`;
const audiosUrl = `${baseUrl}assets/audios`;

function media(imgFileName: string, audioFileName: string, text = '') {
    return [`${imgFileName}`, `${audioFileName}`, text];
}

export const Audios = [
    media(require('../assets/images/conan.jpg'), require('../assets/audios/conan.mp3')),
    media(require('../assets/images/is_it_confirmed.jpg'), require('../assets/audios/is it confirmed.mp3')),
    media(require('../assets/images/soraya2.jpg'), require('../assets/audios/estas_con_la_lisiada.mp3')),
    media(require('../assets/images/soraya3.jpg'), require('../assets/audios/maldita_lisiada.mp3')),
    media(require('../assets/images/agripina.jpg'), require('../assets/audios/agripina.mp3')),
    media(require('../assets/images/yamcha.jpg'), require('../assets/audios/yamcha.mp3')),
    media(require('../assets/images/echarri.jpg'), require('../assets/audios/increible.mp3')),
    media(require('../assets/images/chingawat.jpg'), require('../assets/audios/chingawat.mp3')),
    media(require('../assets/images/risa.jpg'), require('../assets/audios/risa.mp3')),
    media(require('../assets/images/no_lo_puedo_creer.jpg'), require('../assets/audios/no_lo_puedo_creer.mp3')),
    media(require('../assets/images/maradona1.jpg'), require('../assets/audios/maradona1.mp3')),
    media(require('../assets/images/patranas.jpg'), require('../assets/audios/patranas.mp3')),
    media(require('../assets/images/amor_heterosexual.jpg'), require('../assets/audios/amor_heterosexual.mp3'))
];

export const Music = [
    media(require('../assets/images/psycho_killer.jpg'), require('../assets/audios/psycho_killer.mp3')),
    media(require('../assets/images/ultraviolento.jpg'), require('../assets/audios/ultraviolento.mp3')),
    media(require('../assets/images/alf.jpg'), require('../assets/audios/alf.mp3')),
    media(require('../assets/images/goku1.jpg'), require('../assets/audios/dbz_fight1.mp3')),
    media(require('../assets/images/goku2.jpg'), require('../assets/audios/dbz_fight2.mp3')),
    media(require('../assets/images/heman.jpg'), require('../assets/audios/heman.mp3')),
    media(require('../assets/images/ryu.jpg'), require('../assets/audios/ryu_music.mp3')),
    media(require('../assets/images/soraya1.jpg'), require('../assets/audios/soraya.mp3')),
    media(require('../assets/images/bycicle.jpg'), require('../assets/audios/villanos.mp3'))
]