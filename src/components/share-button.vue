<template>
  <social-sharing
    :url="this.url"
    :title="this.title"
    :description="this.description"
    :quote="this.description"
    inline-template
  >
    <div class="is-pointer">
      <network network="facebook">
        <i class="fab fa-facebook"></i> Compartir!
      </network>
    </div>
  </social-sharing>
</template>

<script>
import SocialSharing from 'vue-social-sharing';

export default {
  name: 'share-button',
  components: {SocialSharing},
  props: {
    url: String,
    title: String,
    description: String
  }
};
</script>

<style lang="scss">
  .is-pointer {
    cursor: pointer;
  }
</style>
