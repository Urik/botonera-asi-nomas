<template>
  <div id="app">
    <section class="section has-no-top-padding title-section">
      <div class="container">
        <h1 class="title is-1">Botonera así nomás</h1>
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
              <div v-for="(audio, i) in audios" :key="i" @contextmenu="download('downloadAudio' + i, $event)">
                <play-button 
                  :audio-url="audio.soundUrl" 
                  :img-url="audio.imgUrl" 
                  :name="audio.name"
                  ref="playButton">
                </play-button>                
                <a :href="audio.soundUrl" download hidden :ref="`downloadAudio${i}`"></a>
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
              <div v-for="(audio, i) in music" :key="i" @contextmenu="download('downloadMusic' + i, $event)">
                <play-button
                  :audio-url="audio.soundUrl" 
                  :img-url="audio.imgUrl" 
                  :name="audio.name"
                  ref="playButton">
                </play-button>
                <a :href="audio.soundUrl" download hidden :ref="`downloadMusic${i}`"></a>
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

import PlayButton from './components/play-button.vue';
import PageFooter from './components/page-footer.vue';
import { Audios, Music } from './services/Audios';

const getAudioData = ([imgUrl, soundUrl, name]) => ({ soundUrl, imgUrl, name });

export default {
  name: 'app',
  props: {},
  data: () => ({
    audios: Audios.map(getAudioData),
    music: Music.map(getAudioData)
  }),
  components: {
    PlayButton,
    PageFooter
  },
  mounted() {
    this.loadAll();
  },
  methods: {
    loadAll() {
      for (let ref of this.$refs.playButton) {
        ref.loadSound();
      }
    },
    download(refIdentifier, event) {
      for(const linkElem of this.$refs[refIdentifier]) {
        linkElem.click();
      }
      event.preventDefault();
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

.notification.download-info {
  font-size: 0.6rem;
  padding: 0.5rem 0.6rem;
}

.section.title-section {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>