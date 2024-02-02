<template>
  <div class="project-detail">

    <div  v-if="true" class="">
        <!-- eslint-disable vue/no-v-html -->
        
        <!-- <div
          v-if="article.content"
          v-html="$md.render(article.content)"/> -->
      
      <div class="heading">
        <div class="heading__image">
          <img :src="getStrapiMedia(article.headerimage.url)" alt="">
        </div>

        <div class="heading__content">
          <h1 class="heading__title">{{ article.title }}</h1>
          <div
            class="heading__desc"
            v-if="article.content"
            v-html="$md.render(article.content)" />

          <div
            class="heading__links"
            v-if="article.links"
            v-html="$md.render(article.links)" />
        </div>
      </div>

      <div class="content-blocks">
        <template v-for="block in article.dynamiclayout">
          <!-- IMAGES BLOCK -->
          <template v-if="block.__component === 'content-blocks.images-block'">
            <Images :block="block" />
          </template>

          <!-- VIDEO BLOCK -->
          <template v-if="block.__component === 'content-blocks.video-block'">
            <Video :block="block" />
          </template>

          <!-- VIDEO BLOCK -->
          <template v-if="block.__component === 'content-blocks.youtube-block'">
            <Youtube :block="block" />
          </template>

        </template>

        


        <!-- eslint-enable vue/no-v-html -->
        <!-- <p v-if="article.published_at">
          {{ moment(article.published_at).format("MMM Do YY") }}
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "../../utils/medias";
import { getMetaTags } from "../../utils/seo";
import ThreeDee from "../../components/ThreeDee.vue";
import Images from "../../components/blocks/Images.vue";
import Video from "../../components/blocks/Video.vue";
import Youtube from "../../components/blocks/Youtube.vue";

export default {
  async asyncData({ $strapi, params }) {
    const matchingArticles = await $strapi.find("articles", {
      slug: params.slug,
    });
    return {
      article: matchingArticles[0],
      global: await $strapi.find("global"),
    };
  },
  components: {
    ThreeDee,
    Images,
    Video,
    Youtube
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
    };
  },
  methods: {
    moment,
    getStrapiMedia,
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      metaTitle: this.article.title,
      metaDescription: this.article.description,
      shareImage: this.article.image,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: favicon && getStrapiMedia(favicon.url),
        },
      ],
    };
  },
  mounted() {
    let linkContainer = document.querySelector('.heading__links');

    if (linkContainer) {

      let links = linkContainer.querySelectorAll('a');

      links.forEach(link => {
        link.setAttribute('target', '_blank');
      })
    }
  }
};
</script>

<style lang="scss">
$mp: 24px;

.project-detail {
  margin-top: 84px;

  .heading {
    //margin-top: 90px;
    margin-top: 79px;
    margin-bottom: $mp * 2;
    position: relative;
    color: black;
    white-space: nowrap;

    @media only screen and (max-width: 1098px) {
      white-space: normal;
    }

    * { white-space: normal; }

    &__image,
    &__content {
      display: inline-block;
      width: 49.4%;
      font-size: 0;
      vertical-align: top;
      box-sizing: border-box;
    }

    &__image {
      width: calc(66% + 26px);
      padding-right: $mp;
      // border: 1px dashed red;

      @media only screen and (max-width: 1098px) {
        width: 100%;
        padding-right: 0;
      }

      img {
        width: 100%;
      }
    }

    &__content {
      width: calc(33.33% - 26px);
      height: 100%;
      padding-bottom: $mp;;

      @media only screen and (max-width: 1098px) {
        width: 100%;
        position: relative;
        margin-top: 30px;
      }
    }

    &__title {
      margin: 0;
      margin-bottom: 10px;
      margin-top: -2px;
      font-size: 18px;
      padding-bottom: 15px;
      font-family: "MD-System", sans-serif;
      font-weight: 900;
      color: black;
      border-bottom: 1px solid black;

      @media only screen and (max-width: 1098px) {
        margin-top: $mp;
        margin-bottom: 0;
      }
    }
    
    &__desc {
        a {
          text-decoration: underline;
        }
    }

    &__links,
    &__desc {
      padding-top: $mp;
      font-size: 18px;
      color: black;
      font-weight: 200;

      * { color: black; }

      @media only screen and (max-width: 1098px) {
        padding-right: 20%;
      }

      @media only screen and (max-width: 588px) {
        padding-right: 0;
      }


      // typografy stuff
      blockquote {
        font-size: 15px;
        font-weight: 200;
        font-style: normal;
        margin: 0;
      }

      p {
        margin-top: 0;
      }


      hr {
        border-top: 1px solid black;
        margin-top: 38px;
        margin-bottom: 10px;
      }
    }

    &__links {
      font-size: 14px;
      position: absolute;
      bottom: 0;
      transition: 0.2s;

      @media only screen and (max-width: 1098px) {
        position: relative;
        margin-top: 20px;
      }

      p {
        margin: 0;
      }

      a {
        text-decoration: none !important;
      }
    }
  }

  .content-blocks {
  }

  .block {
    margin-bottom: $mp;

    &:last-of-type {
      margin-bottom: $mp * 2;
    }
  }
}

</style>