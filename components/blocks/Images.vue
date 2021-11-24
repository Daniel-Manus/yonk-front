<template>
  <div :class="'three-images-' + 0" class="three-images block">
    
      <div :class="'col-' + block.images.length" class="three-images__image" v-for="img in block.images">


        <template v-if="img.ext.toLowerCase() === '.jpg' || img.ext.toLowerCase() === '.jpeg' || img.ext.toLowerCase() === '.png' || img.ext.toLowerCase() === '.gif'">

          <!-- IF 1 IMAGE -->
          <template v-if="block.images.length == 1">

              <!-- <template v-if="img.formats.large"> -->
                <!-- <img :src="getStrapiMedia(img.formats.large.url)" alt=""> -->
              <!-- </template> -->
              <!-- <template v-else> -->
                <img :src="getStrapiMedia(img.url)" alt="">
              <!-- </template> -->

          </template>

          <!-- IF 2 OR MORE IMAGES -->
          <template v-if="block.images.length >= 2">
            <template v-if="img.formats.medium">
              <img :src="getStrapiMedia(img.formats.medium.url)" alt="">
            </template>
            <template v-else>
              <img :src="getStrapiMedia(img.url)" alt="">
            </template>
          </template>

        </template>


        <template v-if="img.ext === '.fbx'">
          <ThreeDee :model="img" />
        </template>


      </div>


  </div>
</template>

<script>

import { getStrapiMedia } from "../../utils/medias";
import ThreeDee from "../ThreeDee.vue";

export default {
  name: 'ThreeImages',
  components: {
    ThreeDee
  },
  props: {
    block: {
      type: Object,
      default: () => ({}),
    },
  },
  data: function () {
    return {
    }
  },
  methods: {
    getStrapiMedia
  },
  mounted() {

  }
}
</script>

<style lang="scss">

$mp: 24px;

.three-images {

  &__image {
    margin-right: 24px;
    display: inline-block;
    vertical-align: top;

    img {
      width: 100%;
    }

    &.col-1 {
      width: 100%;
    }

    &.col-2 {
      width: calc(50% - 12px);

      @media only screen and (max-width: 770px) {
        width: 100%;
        margin-bottom: $mp;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    &.col-3 {
      width: calc(33.3333% - 16px);

      @media only screen and (max-width: 588px) {
        width: 100%;
        margin-bottom: $mp;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    img {
      
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}


</style>