<template>
  <div :class="'youtube-' + block.id" class="youtube block">
    <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + block.embedurl" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>

import { getStrapiMedia } from "../../utils/medias";

export default {
  name: 'Youtube',
  props: {
    block: {
      type: Object,
      default: () => ({}),
    },
  },
  data: function () {
    return {
      container: null,
      vid: null,
      id: Math.floor(Math.random() * 1000000),
      playing: false
    }
  },
  methods: {
    getStrapiMedia,
  },
  mounted() {
    let that = this;
    this.container = document.querySelector('.youtube-' + this.block.id);
    this.vid = this.container.querySelector('iframe');
    this.vid.style.height = this.vid.offsetWidth * 0.56 + 'px';

    window.addEventListener('resize', function(event) {
      that.vid.style.height = that.vid.offsetWidth * 0.56 + 'px';
    }, true);
  }
}
</script>

<style lang="scss">

.youtube {
  width: 100%;
  position: relative;

  iframe {
    width: 100%;
    height: 60vw;
  }
}


</style>