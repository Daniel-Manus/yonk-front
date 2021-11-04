<template>
  <div class="masonry-grid hidden">
    <template v-for="article in reversedArticles">
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
      // imagesLoaded: 0
      // imageDimensions: []
    }
  },
  computed: {
    reversedArticles() {
      // let rev = this.articles.slice();
      // rev = rev.reverse();
      // return rev

      return this.articles.slice().reverse();
    } 
  },
  methods: {
    imageLoaded(e) {
      // this.imagesLoaded++;
      // this.imageDimensions.push(e)
    },
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

    const setCols = () => {      
      if (window.innerWidth > 1098) {
        grid.column = 3;

      } else if (window.innerWidth < 1098 && window.innerWidth > 588) {
        grid.column = 2;
      } else {
        grid.column = 1;
      }
      grid.renderItems();
    }

    const onWindowResize = () => {
      setTimeout(() => {        
        setCols();
      }, 100);
    }

    window.addEventListener( 'resize', onWindowResize );
    onWindowResize();
    setCols();

    // this.articles.forEach(article => {
    
    // });

    // let iterations = 0;

    // const checkImgsLoad = () => {
    //   console.log("🚀 ~ imagesLoaded ", this.imagesLoaded)
    //   if (this.imagesLoaded === this.articles.length) {
        let parent = document.querySelector('.masonry-grid')
        grid.renderItems();
        parent.classList.remove('hidden')

        for (let i = 0; i < 40; i++) {
          setTimeout(() => {
            console.log('uuum')
            grid.updateItems();
          }, 30 * (i + 1));
        }

    //   } else {
    //     setTimeout(() => {
    //       iterations++;
    //       iterations < 3000 && checkImgsLoad();
    //     }, 2);
    //   }
    // }

    // checkImgsLoad();

  }
};
</script>

<style lang="scss">

  .masonry-grid {
    // background: lightgray;
    margin-bottom: 10px;

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
