<template>
  <nuxt-link
    :key="article.id"
    :to="{ name: 'penisfuck-slug', params: { slug: article.slug } }"
    class=""
  >
    <!-- IF IMAGE -->
    <template v-if="imgExt === '.jpg' || imgExt === '.jpeg' || imgExt === '.png' || imgExt === '.gif'">

      <!-- IF IMAGE MEDIUM -->
      <template v-if="article.image.formats.small">
        <img @load="onImageLoad" :src="getStrapiMedia(article.image.formats.small.url)" alt="">
      </template>

      <!-- IF NO IMAGE MEDIUM -->
      <template v-else>
        <img @load="onImageLoad" :src="getStrapiMedia(article.image.url)" alt="">
      </template>
      
    </template>


    <!-- IF FBX -->
    <!-- <template v-if="article.image.ext === '.fbx'">
      <ThreeDee :model="article.image" />
    </template> -->

  </nuxt-link>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";
import ThreeDee from "./ThreeDee.vue";

export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  data: function () {
    return {
      imgExt: this.article.image.ext.toLowerCase()
    }
  },
  components: {
    ThreeDee
  },
  methods: {
    getStrapiMedia,
    onImageLoad() {
      this.$emit('image-loaded', true)
    }
  },
};
</script>

<style lang="scss">
</style>