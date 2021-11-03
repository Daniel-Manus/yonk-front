<template>
  <div class="masonry-grid">
    <template v-for="article in reversedArticles">
      <div :class="{ 'fbx': article.image.ext == '.fbx' }" class="project-thumb">
        <ArticleCard :key="article.id" :article="article" />
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
  computed: {
    reversedArticles() {
      // let rev = this.articles.slice();
      // rev = rev.reverse();
      // return rev

      return this.articles.slice().reverse();
    } 
  },
  mounted() {
    // Grid.MasonryGrid
    const grid = new MasonryGrid('.masonry-grid', {
      defaultDirection: "end",
      gap: 5,
      align: "justify",
      column: 3,
      // columnSize: 99,
      // columnSizeRatio: -1,
    });

    const onWindowResize = () => {
      setTimeout(() => {        
        if (window.innerWidth > 1098) {
          grid.column = 3;

        } else if (window.innerWidth < 1098 && window.innerWidth > 588) {
          grid.column = 2;
        } else {
          grid.column = 1;
        }
      }, 100);
    }

    window.addEventListener( 'resize', onWindowResize );
    onWindowResize();

    setTimeout(() => {
      grid.renderItems();
    }, 1);
  }
};
</script>

<style lang="scss">

  .masonry-grid {
    // background: lightgray;
    margin-bottom: 10px;
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
