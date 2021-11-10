<template>
  <div class="project-detail">

    <div  v-if="true" class="">
        <!-- eslint-disable vue/no-v-html -->
        
        <!-- <div
          v-if="article.content"
          v-html="$md.render(article.content)"/> -->
      
      <div class="heading">
        <div class="heading__image">
          <img src="/temoinfo.png" alt="">
        </div>

        <div class="heading__content">
          <!-- <h1 class="heading__title">{{ article.title }}</h1> -->
          
          <!-- v-if="article.content"
          v-html="$md.render(article.content)" -->
          <div class="heading__desc" >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "../utils/medias";
import { getMetaTags } from "../utils/seo";

export default {
  async asyncData({ $strapi }) {
    return {
      // articles: await $strapi.find("articles"),
      // homepage: await $strapi.find("homepage"),
      global: await $strapi.find("global"),
      // info: await $strapi.find("info"),
    };
  },
  components: {
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
    //       href: getStrapiMedia(favicon.url),
    //     },
    //   ],
    // };
  },
  mounted() {
  }
};
</script>

<style lang="scss">
$mp: 24px;

.project-detail {
  margin-top: 84px;
}

.heading {
  //margin-top: 90px;
  margin-top: $mp * 3;
  margin-bottom: $mp * 2;
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
    position: relative;
    height: 100%;

    @media only screen and (max-width: 1098px) {
      width: 100%;
    }
  }

  &__title {
    margin: 0;
    margin-bottom: $mp;
    margin-top: -2px;
    font-size: 18px;
    font-family: "MD-System", sans-serif;
    font-weight: 900;
    color: black;

    @media only screen and (max-width: 1098px) {
       margin-top: $mp;
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
    opacity: 0;
    transition: 0.2s;

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

</style>