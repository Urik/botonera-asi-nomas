<template>
  <div id="app">
    <section class="section has-no-top-padding">
      <div class="container">
        <h1 class="title is-1">Botonera así nomás</h1>
      </div>
    </section>
    <section class="section has-no-top-padding">
      <div class="container">
        <a v-on:click="this.loadAll" class="button is-primary is-large is-fullwidth">Cargar todos</a>
      </div>
    </section>
    <section class="section has-no-top-padding">
      <div class="container">
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
          By Uri Berman Kleiner
        </p>
      </div>
    </footer>
  </div>
</template>

<script>

import PlayButton from './components/play-button.vue';
import { Audios, Music } from './services/Audios';

const getAudioData = ([imgUrl, soundUrl, name]) => ({ soundUrl, imgUrl, name });

export default {
  name: 'app',
  props: {
    
  },
  data: () => ({
    audios: Audios.map(getAudioData),
    music: Music.map(getAudioData)
  }),
  components: {
    PlayButton
  },
  created() {
    console.log(Audios);
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

.has-no-top-padding {
    padding-top: 0;
}
</style>