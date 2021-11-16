<template>
  <div class="info">

    <div  v-if="true" class="">
        <!-- eslint-disable vue/no-v-html -->
        
        <!-- <div
          v-if="article.content"
          v-html="$md.render(article.content)"/> -->
      
      <div class="heading">
        <div class="heading__image">
          <img src="/tempinfo.jpg" alt="">
        </div>

        <div class="heading__content">
          <!-- <h1 class="heading__title">{{ article.title }}</h1> -->
          
          <!-- v-if="article.content"
          v-html="$md.render(article.content)" -->
          <div class="heading__desc" >
            <p>
              Hello there! We are YONK, a 3D studio based in The Hague (NL). We specialise in using Virtual Reality sculpting software to create 3D character design and animations to be used in advertising, video clips, identity, face filters and a lot more. This tool has helped us develop a unique maximalist and whimsical style paired with tangible textures and vivid colours. We aim to create work that steers away from conventional 3D and is entirely playful, dream-like and sometimes, damn right weird!
            </p>
            <hr>

            <h4>Contact</h4>

            info@yonk.online<br>
            Amsterdamse Veerkade 4a, Den Haag, Netherlands, 2512AJ<br>
            +31 610354829 (NL)<br>

            <h4>Clients include</h4>

            Lazy Oaf, UK<br>
            Nike, EU<br>
            VICE, USA<br>
            RiffRaff films, UK<br>
            Atlantic Records, US/UK<br>
            Agile films, UK<br>
            It's Nice That, UK<br>
            Muziekgebouw, NL<br>
            My Mochi, US<br>
            Golgotha, FR<br>
            Cassoulet Palace, CA<br>

            <h4>Talks</h4>

            Livetalkfrom, 2020<br>
            HKU salon #3: Plugged in, 2020<br>
            AnimatekaPRO, 2020<br>
            Sharing Bauhaus, 2020<br>
            INTL International Assembly, 2021<br>
            Zefir7, 2021<br>

            <h4>Workshops</h4>

            Central Saint Martins, 2021<br>
            STORE STORE London, 2021<br>
            INTL International Assembly, 2021<br>

            <h4>Press</h4>
            <a href="https://www.itsnicethat.com/articles/yonk-digital-160120" target="_blank">It's Nice that, 2019</a><br>
            <a href="https://www.itsnicethat.com/news/lovers-my-mochi-advertising-220721" target="_blank">It's Nice that, 2021</a><br>

            <h4>NFT's</h4>
            <a href="http://superrare.co/yonk/" target="_blank">Super Rare</a><br>
            <a href="http://foundation.app/yonk/" target="_blank">Foundation</a><br>
            <a href="https://opensea.io/collection/cycloobs" target="_blank">Cycloobs</a><br>

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

.info {
  margin-top: 84px;


  .heading {
    //margin-top: 90px;
    margin-top: $mp * 4.5;
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

      @media only screen and (max-width: 1098px) {
        width: 100%;
        position: relative;
        margin-top: 30px;
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
      padding-top: 0;
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

      h4 {
        font-family: "MD-System", sans-serif;
        font-weight: 900;
        font-size: inherit;
        color: black;
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