<template>
  <div class="landing">
    <ThreeDeeLanding :model="model" :lightIntensity="lightIntensity" :masterScale="scale" />
  </div>
</template>

<script>
import ThreeDeeLanding from "./ThreeDeeLanding.vue";

export default {
  components: {
    ThreeDeeLanding
  },
  props: {
    model: {
      type: Object,
      default: () => {},
    },
    lightIntensity: {
      type: Number,
      default: () => 1,
    },
    scale: {
      type: Number,
      default: () => 1,
    },
  },
  computed: {},
};
</script>


<style lang="scss">
$mp: 24px;
$maxwidth: 1500px;

.landing {
  max-width: $maxwidth;
  margin: 0 auto;
  height: calc(95vh - 124px);
  margin-bottom: 49px;
  font-size: 1vw;
  color: black;
  margin-top: 79px;

  @media only screen and (max-width: 588px) {
    height: calc(95vh - 194px);
  }
}
</style>