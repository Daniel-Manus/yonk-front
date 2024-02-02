<template>
  <div class="masonry-grid" :class="{ 'hidden': !imagesLoaded }">
    <template v-for="article in sortedArticles">
      <div :class="{ 'fbx': article.image.ext == '.fbx' }" class="project-thumb">
        <ArticleCard :key="article.id" :article="article" @image-loaded="imageLoaded" />
      </div>
    </template>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard";

import { MasonryGrid, JustifiedGrid, FrameGrid, PackingGrid } from "@egjs/grid";

export default {
  components: {
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    return {
      imagesLoadedN: 0,
      imagesLoaded: false
    }
  },
  computed: {
    sortedArticles() {
      // Sort by publishedAt
      const sorted = this.articles.sort(function(a, b) {
          var textA = a.publishedAt.toUpperCase();
          var textB = b.publishedAt.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      // Reverse and return
      return sorted.slice().reverse();
    } 
  },
  methods: {
    imageLoaded(e) {
      this.imagesLoadedN++;

      if (this.imagesLoadedN === this.articles.length) {
        this.imagesLoaded = true;
      }
    },
  },
  mounted() {
    const grid = new MasonryGrid('.masonry-grid', {
      defaultDirection: "end",
      gap: 5,
      align: "justify",
      column: 3,
      // columnSize: 99,
      // columnSizeRatio: -1,
    });

    grid.renderItems();

    const setCols = () => {      
      if (window.innerWidth > 1098) {
        grid.column = 3;

      } else if (window.innerWidth < 1098 && window.innerWidth > 588) {
        grid.column = 2;
      } else {
        grid.column = 1;
      }
    }

    const onWindowResize = () => {
      setTimeout(() => {        
        setCols();
        grid.updateItems();
        grid.syncElements();


        setTimeout(() => {
          setCols();
          grid.updateItems();
          grid.syncElements();
        }, 1000);
      }, 300);
    }

    window.addEventListener( 'resize', onWindowResize );
    onWindowResize();
    setCols();

    // Fallback in case images don't load,
    // leaving everything hidden
    setTimeout(() => {
      this.imagesLoaded = true;
    }, 3000);
  }
};
</script>

<style lang="scss">

  .masonry-grid {
    margin-bottom: 10px;
    margin-top: 79px;

    &.hidden {
      opacity: 0;
    }
  }

.project-thumb {
  width: calc(33.3333% - 15px);
  height: auto;
  vertical-align: top;
  transition: 0.2s;

  &:hover {
    filter: grayscale(40%);
  }

  @media only screen and (max-width: 1098px) {
    width: calc(50% - 15px);
  }

  @media only screen and (max-width: 588px) {
    width: 100%;
  }

  img {
    width: 100%;
    margin-bottom: 18px;
  }

  &.fbx {
    // TODO DANIEL height has to be the as width
    // height: 22vw;
  }
}

</style>
