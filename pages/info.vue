<template>
  <div class="info">
    <div v-if="true" class="">
      <!-- eslint-disable vue/no-v-html -->

      <div class="heading">
        <div class="heading__media">

          <!-- INFO IMAGE/VIDEO 1 -->
          <img
            v-if="global.info_media_1 && global.info_media_1.ext === '.jpg' || global.info_media_1.ext === '.png'"
            :src="getStrapiMedia(global.info_media_1.url)"
            class="heading__media--top"
            alt=""
          />

          <video
            v-if="global.info_media_1 && global.info_media_1.ext === '.mp4'"
            class="heading__media--top" muted loop>
            <source :src="getStrapiMedia(global.info_media_1.url)" type="video/mp4">
            Your browser does not support the video tag.
          </video> 

          <!-- INFO IMAGE/VIDEO 2 -->
          <img
            v-if="global.info_media_2 && global.info_media_2.ext === '.jpg' || global.info_media_2.ext === '.png'"
            :src="getStrapiMedia(global.info_media_2.url)"
            class="heading__media--bottom"
            alt=""
          />

          <video
            v-if="global.info_media_2 && global.info_media_2.ext === '.mp4'"
            class="heading__media--bottom" muted loop>
            <source :src="getStrapiMedia(global.info_media_2.url)" type="video/mp4">
            Your browser does not support the video tag.
          </video> 
          
        </div>

        <div class="heading__content">
          <div
            v-if="global.info_description"
            v-html="$md.render(global.info_description)"
          />
          <div
            v-if="global.info_description_2"
            v-html="$md.render(global.info_description_2)"
          />
        </div>

        <!-- INFO IMAGE/VIDEO 2 (MOBILE ONLY) -->
        <img
          v-if="global.info_media_2 && global.info_media_2.ext === '.jpg' || global.info_media_2.ext === '.png'"
          :src="getStrapiMedia(global.info_media_2.url)"
          class="heading__media--mobile"
          alt=""
        />

        <video
          v-if="global.info_media_2 && global.info_media_2.ext === '.mp4'"
          class="heading__media--mobile" muted controls preload="true" autobuffer="true">
          <source :src="getStrapiMedia(global.info_media_2.url)" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <Video :block="{
          id: 'lol',
          video: global.info_media_2
        }" />

      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "../utils/medias";
import Video from "../components/blocks/Video.vue";

// import { getMetaTags } from "../utils/seo";

export default {
  components: {
    Video
  },
  async asyncData({ $strapi }) {
    return {
      // articles: await $strapi.find("articles"),
      // homepage: await $strapi.find("homepage"),
      global: await $strapi.find("global"),
      // info: await $strapi.find("info"),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
    };
  },
  mounted() {
    document.title = "Yonk | Info";
    // Add target _blank to links
    let linkContainer = document.querySelector(".info");
    if (linkContainer) {
      let links = linkContainer.querySelectorAll("a");
      links.forEach((link) => {
        link.setAttribute("target", "_blank");
      });
    }

    if (window && window.innerWidth > 1098) {
      let videos = document.querySelectorAll('video')
      videos.forEach(video => {
        video.play()
      })
    }
  },
  methods: {
    moment,
    getStrapiMedia,
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;
    // Merge default and article-specific SEO data
    // const fullSeo = {
    //   ...defaultSeo,
    //   metaTitle: this.article.title,
    //   metaDescription: this.article.description,
    //   shareImage: this.article.image,
    // };

    // return {
    //   titleTemplate: `%s | ${siteName}`,
    //   title: fullSeo.metaTitle,
    //   meta: getMetaTags(fullSeo),
    //   link: [
    //     {
    //       rel: "favicon",
    //       href: favicon && getStrapiMedia(favicon.url),
    //     },
    //   ],
    // };
  },
};
</script>

<style lang="scss">
$mp: 24px;

.info {
  margin-top: 84px;

  .heading {
    margin-top: 79px;
    margin-bottom: $mp * 2;
    position: relative;
    color: black;
    white-space: nowrap;

    @media only screen and (max-width: 1098px) {
      white-space: normal;
    }

    * {
      white-space: normal;
    }

    &__media,
    &__content {
      display: inline-block;
      width: 49.4%;
      vertical-align: top;
      box-sizing: border-box;
    }

    &__media {
      width: calc(66%);
      margin-right: $mp;

      @media only screen and (max-width: 1098px) {
        width: 100%;
        padding-right: 0;
      }

      &--bottom {
        margin-top: $mp;

        @media only screen and (max-width: 1098px) {
          display: none;
        }
      }

      &--mobile {
        display: none;
        @media only screen and (max-width: 1098px) {
          display: block;
        }
      }

      img {
        width: 100%;
        opacity: 0.95;
      }
    }

    &__content {
      width: calc(33.33% - 26px);
      height: 100%;
      padding-top: 0;
      font-size: 18px;
      font-weight: 200;
      color: black;

      // typografy stuff
      blockquote {
        font-size: 15px;
        font-weight: 200;
        font-style: normal;
        margin: 0;
      }

      a {
        text-decoration: underline;
      }

      p {
        margin-top: 0;
      }

      hr {
        border-top: 1px solid black;
        margin-top: 38px;
        margin: 40px 0;
      }

      h4 {
        font-family: "MD-System", sans-serif;
        font-weight: 900;
        font-size: inherit;
        color: black;
      }

      @media only screen and (max-width: 1098px) {
        width: 100%;
        position: relative;
        margin-top: 30px;
        padding-right: 20%;
      }

      @media only screen and (max-width: 588px) {
        padding-right: 0;
      }
    }
  }
}
</style>
