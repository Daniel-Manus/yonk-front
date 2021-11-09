<template>
  <div @click="handleClick" :class="'video-' + block.id" class="video block">
    <video width="320" height="240">
      <source :src="getStrapiMedia(block.video.url)" type="video/mp4">
    </video>
    <div :class="'video__button--playing-' + playing" class="video__button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 127 127">
        <defs/>
        <g>
          <path fill="#ffffff" fill-rule="evenodd" d="M62.5 125C97.0178 125 125 97.0178 125 62.5C125 27.9822 97.0178 0 62.5 0C27.9822 0 0 27.9822 0 62.5C0 97.0178 27.9822 125 62.5 125ZM46.8752 83.3335L88.5418 62.5002L46.8752 41.6668V83.3335Z" clip-rule="evenodd"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>

import { getStrapiMedia } from "../../utils/medias";

export default {
  name: 'Video',
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
    handleClick() {
      this.playing = !this.playing;
      this.playing && this.vid.play();
      !this.playing && this.vid.pause();
    }
  },
  mounted() {
    this.container = document.querySelector('.video-' + this.block.id);
    this.vid = this.container.querySelector('video');

    this.vid.addEventListener('ended', (event) => {
      this.vid.currentTime = 0;
      this.playing = false;
    });
  }
}
</script>

<style lang="scss">

.video {
  width: 100%;
  height: auto;
  position: relative;
  cursor: pointer;
  border: 1px dashed red;

  video {
    width: 100%;
  }

  &__button {
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 100;
    transition: 0.4s ease;
    pointer-events: none;

    &--playing-true {
      opacity: 0;
    }
  }
}


</style>