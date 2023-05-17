<template>
  <nuxt-link
    :key="article.id"
    :to="{ name: 'project-slug', params: { slug: article.slug } }"
    class="thumb-container">
  
    <!-- IF IMAGE -->
    <template v-if="imgExt === '.jpg' || imgExt === '.jpeg' || imgExt === '.png' || imgExt === '.gif'">

      <!-- IF IMAGE SMALL -->
      <template v-if="article.image.formats.small">
        <img
            @load="onImageLoad"
            :src="getStrapiMedia(article.image.formats.small.url)"
            alt="">
      </template>

      <!-- IF NO IMAGE SMALL -->
      <template v-else>
        <img
          @load="onImageLoad"
          :src="getStrapiMedia(article.image.url)"
          alt="">
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
      imgExt: this.article.image.ext.toLowerCase(),
    }
  },
  components: {
    ThreeDee
  },
  methods: {
    getStrapiMedia,
    onImageLoad() {
      this.$emit('image-loaded', { id: this.article.id, width: this.article.image.width, height: this.article.image.height })
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss">
</style>