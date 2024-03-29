const strapiBaseUri = "https://yonk-back.herokuapp.com";

export default {
  target: "static",
  generate: {
    fallback: true,
  },
  env: {
    strapiBaseUri,
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Staatliches",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    "uikit/dist/css/uikit.min.css",
    "uikit/dist/css/uikit.css",
    "@assets/css/main.css",
  ],
  plugins: [{ src: "~/plugins/uikit.js", ssr: false }],
  modules: ["@nuxtjs/markdownit", "@nuxtjs/strapi", "@nuxtjs/gtm"],
  gtm: {
    id: "GTM-WB5RXML"
  },
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: "articles",
        type: "collection",
      },
      {
        name: "homepage",
        type: "single",
      },
      {
        name: "info",
        type: "single",
      },
      {
        name: "global",
        type: "single",
      },
    ],
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
  build: {
    transpile:["three"]
  }
};
