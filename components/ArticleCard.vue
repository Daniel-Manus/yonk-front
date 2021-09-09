<template>
  <nuxt-link
    :key="article.id"
    :to="{ name: 'penisfuck-slug', params: { slug: article.slug } }"
    class=""
  >
    <!-- IF IMAGE -->
    <template v-if="article.image.ext === '.jpg' || article.image.ext === '.png' || article.image.ext === '.gif'">

      <!-- IF IMAGE MEDIUM -->
      <template v-if="article.image.formats.small">
        <img :src="getStrapiMedia(article.image.formats.small.url)" alt="">
      </template>

      <!-- IF NO IMAGE MEDIUM -->
      <template v-else>
        <img :src="getStrapiMedia(article.image.url)" alt="">
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
  components: {
    ThreeDee
  },
  methods: {
    getStrapiMedia,
  },
};
</script>

<style lang="scss">
</style>