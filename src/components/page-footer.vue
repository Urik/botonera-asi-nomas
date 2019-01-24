<template>
  <footer class="footer">
    <div class="content has-text-centered has-text-left-mobile">
      <div class="greetings">
        <p>Made with
          <strong>
            <span class="has-text-danger">mucho amor</span>
          </strong> by
          <strong>
            <span class="has-text-info">Uri Berman Kleiner</span>
          </strong> for the
          <strong>
            <span class="is-family-code">Te lo resumo así nomás</span>
          </strong> community.
        </p>
        <p>Muchas gracias a Jorge Pinarello, Natalia Maldini y la tía Marta por tantas risas!</p>
      </div>
      <div class="level">
        <div class="level-item">
          <a href="https://www.youtube.com/channel/UCw7Bz6EHxlnOoBUBlJZCWCw" target="_blank">
            <img
              class="te-lo-resumo-logo"
              :src="this.teLoResumoLogo"
              alt="Te lo resumo asi nomas!"
            >
          </a>
        </div>
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
          <a href="https://www.linkedin.com/in/bermanuri/" target="_blank">
            <div class="icon is-large linkedin-icon">
              <i class="fab fa-linkedin-in fa-3x"></i>
            </div>
            <p class="heading">Contact me</p>
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="https://github.com/Urik/botonera-asi-nomas" target="_blank">
            <div class="icon is-large github-icon">
              <i class="fab fa-github-alt fa-3x"></i>
            </div>
            <p class="heading">Colabora!</p>
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="https://vuejs.org/" target="_blank">
            <div class="icon is-large vue-icon">
              <i class="fab fa-vuejs fa-3x"></i>
            </div>
            <p class="heading">Hecho con VueJS</p>
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="https://bulma.io" target="_blank">
            <img class="bulma-icon" :src="this.bulmaIcon" alt="Made with Bulma">
            <p class="heading">Hecho con Bulma</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from "vue";
import madeWithBulma from '../assets/images/bulma-logo.png';
import teLoResumoLogo from '../assets/images/te_lo_resumo_logo.jpg';
export default {
  name: "page-footer",
  data: () => ({
    bulmaIcon: madeWithBulma,
    teLoResumoLogo: teLoResumoLogo
  })
};
</script>


<style lang="scss" scoped>
.vue-icon {
  color: rgb(79, 192, 141);
}

.linkedin-icon {
  color: #0077b5;
}

.github-icon {
  color: #333333;
}

.greetings {
  margin-bottom: 3rem;
}

.bulma-icon {
  height: 3rem;
}

.te-lo-resumo-logo {
  height: 4rem;
  border-color: #333;
  border-style: solid;
  border-width: 2px;
}
</style>
