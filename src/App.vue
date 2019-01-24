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
              <play-button v-for="(audio, i) in audios" 
                v-bind:key="i" 
                v-bind:audio-url="audio.soundUrl" 
                v-bind:img-url="audio.imgUrl" 
                v-bind:name="audio.name"
                ref="playButton">
              </play-button>
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
          <div class="column"></div>
          <div class="column is-four-fifths-desktop is-full play-butons">
            <div class="play-buttons">
              <play-button v-for="(audio, i) in music" 
                v-bind:key="i" 
                v-bind:audio-url="audio.soundUrl" 
                v-bind:img-url="audio.imgUrl" 
                v-bind:name="audio.name"
                ref="playButton">
              </play-button>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Made with <strong><span class="has-text-danger">mucho amor</span></strong> by <strong>Uri Berman Kleiner</strong> for the <strong><span class="is-family-code">Te lo resumo así nomás</span></strong> community.
        </p>
        <div class="level"></div>
      </div>
    </footer>
  </div>
</template>

<script>

import PlayButton from './components/play-button.vue';
import { Audios, Music } from './services/Audios';
import madeWithBulma from './assets/images/made-with-bulma.png';

const getAudioData = ([imgUrl, soundUrl, name]) => ({ soundUrl, imgUrl, name });

export default {
  name: 'app',
  props: {},
  data: () => ({
    audios: Audios.map(getAudioData),
    music: Music.map(getAudioData),
    bulmaIcon: madeWithBulma
  }),
  components: {
    PlayButton
  },
  mounted() {
    this.loadAll();
  },
  methods: {
    loadAll() {
      for (let ref of this.$refs.playButton) {
        ref.loadSound();
      }
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