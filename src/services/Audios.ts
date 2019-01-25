const baseUrl = '';
const imagesUrl = `${baseUrl}assets/images`;
const audiosUrl = `${baseUrl}assets/audios`;

function media(imgFileName: string, audioFileName: string, text = '', altText = '') {
    return [requireImage(imgFileName), requireAudio(audioFileName), text, altText];
}

function requireImage(imgUrl: string) {
    return require('../assets/images/' + imgUrl);
} 

function requireAudio(audioUrl: string) {
    return require('../assets/audios/' + audioUrl);
} 

export const Audios = [
    media('conan.jpg', 'conan.mp3', undefined, 'Mira con la cara que te mira Conan'),
    media('is_it_confirmed.jpg', 'is it confirmed.mp3', '', 'Is it confirmed?'),
    media('soraya2.jpg', 'estas_con_la_lisiada.mp3', '', 'Maldita lisiada 1'),
    media('soraya3.jpg', 'maldita_lisiada.mp3', '', 'Maldita lisiada 2'),
    media('agripina.jpg', 'agripina.mp3', '', 'Cuidado agripina!'),
    media('yamcha.jpg', 'yamcha.mp3', '', 'No puede ser Ten Shin Han!'),
    media('echarri.jpg', 'increible.mp3', '', 'Pablo Echarri increible!'),
    media('chingawat.jpg', 'chingawat.mp3', '', 'Machete Chingawat!?'),
    media('risa.jpg', 'risa.mp3'),
    media('no_lo_puedo_creer.jpg', 'no_lo_puedo_creer.mp3', '', 'Uy no lo puedo creer'),
    media('maradona1.jpg', 'maradona1.mp3', '', 'Maradona decile no a las drogas'),
    media('patranas.jpg', 'patranas.mp3', '', 'Patrañas!'),
    media('amor_heterosexual.jpg', 'amor_heterosexual.mp3', '', 'Amor heterosecual'),
    media('palanca.jpg', 'tranca_palanca.mp3', '', 'tranca palanca'),
    media('pero_pero_pero.jpg', 'pero_pero_pero.mp3', '', 'Pero pero peroooo')
];

export const Music = [
    media('alf.jpg', 'alf.mp3'),
    media('psycho_killer.jpg', 'psycho_killer.mp3'),
    media('ultraviolento.jpg', 'ultraviolento.mp3'),
    media('kevin_johansen.jpg', 'kevin_johansen.mp3', '', 'I\'m gonna get down with my baby'),
    media('goku1.jpg', 'dbz_fight1.mp3'),
    media('goku2.jpg', 'dbz_fight2.mp3'),
    media('heman.jpg', 'heman.mp3'),
    media('ryu.jpg', 'ryu_music.mp3'),
    media('soraya1.jpg', 'soraya.mp3'),
    media('bycicle.jpg', 'villanos.mp3')
]