<template>
  <div id="app">
    <section class="section has-no-top-padding title-section">
      <div class="container">
        <h1 class="title is-1">Botonera así nomás</h1>
      </div>
    </section>
    <section class="section has-no-bottom-padding">
      <div class="container">
        <share-button
          url="https://botonera.net"
          title="Botonera así nomás"
          description="Botonera para Te Lo Resumo Así Nomás. Increiiiiiible!"
        ></share-button>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="level">
          <div class="level-item">
            <span class="download-info notification is-info">
              ¡Mantené apretado (o click derecho si usás mouse) sobre los audios para descargarlos y compartirlos!
            </span>
          </div>
        </div>
        <h4 class="title is-4">Audios</h4>
        <div class="columns">
          <div class="column is-hidden-touch"></div>
          <div class="column is-four-fifths-desktop is-full">
            <div class="play-buttons">
              <div class="play-button-wrapper" v-for="(audio, i) in audios" :key="i" @contextmenu="download(audio.soundUrl, $event)">
                <play-button 
                  :audio-url="audio.soundUrl" 
                  :img-url="audio.imgUrl" 
                  :name="audio.name"
                  :img-alt="audio.imgAlt"
                  :auto-fetch="audio.autoFetch"
                  ref="playButton">
                </play-button>                
              </div>
            </div>
          </div>
          <div class="column is-hidden-touch"></div>
        </div>
      </div>
    </section>
    <section class="section has-no-top-padding">
      <div class="container">
        <div class="title is-4">Música</div>
        <div class="columns">
          <div class="column is-hidden-touch"></div>
          <div class="column is-four-fifths-desktop is-full play-butons">
            <div class="play-buttons">
              <div class="play-button-wrapper" v-for="(audio, i) in music" :key="i" @contextmenu="download(audio.soundUrl, $event)">
                <play-button
                  :audio-url="audio.soundUrl" 
                  :img-url="audio.imgUrl" 
                  :name="audio.name"
                  :img-alt="audio.imgAlt"
                  :auto-fetch="audio.autoFetch"
                  ref="playButton">
                </play-button>
              </div>
            </div>
          </div>
          <div class="column is-hidden-touch"></div>
        </div>
      </div>
    </section>
    <page-footer></page-footer>
  </div>
</template>

<script>

import downloader from 'downloadjs';
import PlayButton from './components/play-button.vue';
import PageFooter from './components/page-footer.vue';
import ShareButton from './components/share-button';
import { Audios, Music } from './services/Audios';

const getAudioData = ([imgUrl, soundUrl, autoFetch, name, imgAlt]) => ({ soundUrl, imgUrl, autoFetch, name, imgAlt });

export default {
  name: 'app',
  props: {},
  data: () => ({
    audios: Audios.map(getAudioData),
    music: Music.map(getAudioData)
  }),
  components: {
    PlayButton,
    PageFooter,
    ShareButton
  },
  mounted() {
  },
  methods: {
    download(path, event) {
      downloader(path);
      event.preventDefault();
      return false;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.play-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-row-gap: 3vh;
  grid-column-gap: 3vw;
}

.section.has-no-top-padding {
    padding-top: 0;
}

.section.has-no-bottom-padding {
    padding-bottom: 0;
}

.notification.download-info {
  font-size: 0.6rem;
  padding: 0.5rem 0.6rem;
}

.section.title-section {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.play-button-wrapper {
  cursor: pointer;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
}
</style>