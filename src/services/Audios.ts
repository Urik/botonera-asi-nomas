const baseUrl = '';
const imagesUrl = `${baseUrl}assets/images`;
const audiosUrl = `${baseUrl}assets/audios`;

function media(imgFileName: string, audioFileName: string, text = '') {
    return [`${imagesUrl}/${imgFileName}`, `${audiosUrl}/${audioFileName}`, text];
}

export const Audios = [
    media('conan.jpg', 'conan.mp3'),
    media('is_it_confirmed.jpg', 'is it confirmed.mp3'),
    media('yamcha.jpg', 'yamcha.mp3'),
    media('echarri.jpg', 'increible.mp3'),
    media('chingawat.jpg', 'chingawat.mp3'),
    media('risa.jpg', 'risa.mp3'),
    media('no_lo_puedo_creer.jpg', 'no_lo_puedo_creer.mp3'),
    media('maradona1.jpg', 'maradona1.mp3'),
    media('patranas.jpg', 'patranas.mp3'),
    media('amor_heterosexual.jpg', 'amor_heterosexual.mp3')
];

export const Music = [
    media('ryu.jpg', 'ryu_music.mp3', ''),
    media('goku1.jpg', 'dbz_fight1.mp3', ''),
    media('psycho_killer.jpg', 'psycho_killer.mp3'),
    media('ultraviolento.jpg', 'ultraviolento.mp3')
]