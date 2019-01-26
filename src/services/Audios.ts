const baseUrl = '';
const imagesUrl = `${baseUrl}assets/images`;
const audiosUrl = `${baseUrl}assets/audios`;

function media(imgFileName: string, audioFileName: string, autoFetch: boolean, text = '', altText = '') {
    return [requireImage(imgFileName), requireAudio(audioFileName), autoFetch, text, altText];
}

function requireImage(imgUrl: string) {
    return require('../assets/images/' + imgUrl);
} 

function requireAudio(audioUrl: string) {
    return require('../assets/audios/' + audioUrl);
} 

export const Audios = [
    media('conan.jpg', 'conan.mp3', true, '', 'Mira con la cara que te mira Conan'),
    media('is_it_confirmed.jpg', 'is it confirmed.mp3', true, '', 'Is it confirmed?'),
    media('soraya2.jpg', 'estas_con_la_lisiada.mp3', true, '', 'Maldita lisiada 1'),
    media('soraya3.jpg', 'maldita_lisiada.mp3', true, '', 'Maldita lisiada 2'),
    media('agripina.jpg', 'agripina.mp3', true, '', 'Cuidado agripina!'),
    media('yamcha.jpg', 'yamcha.mp3', true, '', 'No puede ser Ten Shin Han!'),
    media('echarri.jpg', 'increible.mp3', true, '', 'Pablo Echarri increible!'),
    media('chingawat.jpg', 'chingawat.mp3', true, '', 'Machete Chingawat!?'),
    media('risa.jpg', 'risa.mp3', true),
    media('no_lo_puedo_creer.jpg', 'no_lo_puedo_creer.mp3', true, '', 'Uy no lo puedo creer'),
    media('maradona1.jpg', 'maradona1.mp3', true, '', 'Maradona decile no a las drogas'),
    media('patranas.jpg', 'patranas.mp3', true, '', 'Patrañas!'),
    media('amor_heterosexual.jpg', 'amor_heterosexual.mp3', true, '', 'Amor heterosecual'),
    media('palanca.jpg', 'tranca_palanca.mp3', true, '', 'tranca palanca'),
    media('pero_pero_pero.jpg', 'pero_pero_pero.mp3', true, '', 'Pero pero peroooo'),
    media('aaa.jpg', 'aaa.mp3', true, '', 'Aaaaaaaaaaaaaaaaah'),
    media('ackbar.jpg', 'ackbar.mp3', true, '', 'It\'s a trap!'),
    media('canchero1.jpg', 'canchero1.mp3', true, '', 'Canchero 1'),
    media('canchero2.jpg', 'canchero2.mp3', true, '', 'Canchero 2'),
    media('velociraptor1.jpg', 'defenderlo.mp3', true, '', 'Este tipo es re canchero, voy a defenderlo'),
    media('besitos.jpg', 'besitos.mp3', true, '', 'Besitos besitos chau chau'),
];

export const Music = [
    media('alf.jpg', 'alf.mp3', false),
    media('psycho_killer.jpg', 'psycho_killer.mp3', false),
    media('ultraviolento.jpg', 'ultraviolento.mp3', false),
    media('kevin_johansen.jpg', 'kevin_johansen.mp3', false, '', 'I\'m gonna get down with my baby'),
    media('goku1.jpg', 'dbz_fight1.mp3', false),
    media('goku2.jpg', 'dbz_fight2.mp3', false),
    media('heman.jpg', 'heman.mp3', false),
    media('ryu.jpg', 'ryu_music.mp3', false),
    media('lost.jpg', 'lost.mp3', false, '', 'Jack crying'),
    media('soraya1.jpg', 'soraya.mp3', false),
    media('bycicle.jpg', 'villanos.mp3', false)
]