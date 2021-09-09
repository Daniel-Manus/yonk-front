<template>
  <div>
    <Landing :model="homepage.landingfbx" :lightIntensity="homepage.lightintensity" />
    <div class="">
      <div class="">
        a
        <Articles :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>
import Landing from "../components/Landing";
import Articles from "../components/Articles";
import { getMetaTags } from "../utils/seo";
import { getStrapiMedia } from "../utils/medias";

export default {
  components: {
    Articles,
    Landing
  },
  async asyncData({ $strapi }) {
    return {
      articles: await $strapi.find("articles"),
      homepage: await $strapi.find("homepage"),
      global: await $strapi.find("global"),
    };
  },
  head() {
    const { seo } = this.homepage;
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...seo,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
  mounted() {
    if (!this.global.Passwordprotect) return;

    var password = prompt("🧙‍♂️ The Doors of Durin, Lord of Moria. Speak, friend, and enter 🧙‍♂️");

    if(password != this.global.Password){
      document.body.innerHTML = '';
      document.body.innerHTML = 'Password Failed! Reload to Renter Password.';
    } else {

    }
  }
};
</script>

<style lang="scss">
$mp: 24px;
$hl: #ff2a00;

@font-face {
  font-family: "MD-System";
  src: url('./static/fonts/MDSystem-Medium.woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "MD-System";
  src: url('./static/fonts/MDSystem-Regular.woff');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "MD-System";
  src: url('./static/fonts/MDSystem-Italic.woff');
  font-weight: 200;
  font-style: italic;
}

@font-face {
  font-family: "MD-System";
  src: url('./static/fonts/MDSystem-Heavy.woff');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "MD-System";
  src: url('./static/fonts/MDSystem-Dark.woff');
  font-weight: 800;
  font-style: normal;
}

</style>