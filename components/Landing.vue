<template>
  <div class="landing">
    <ThreeDeeLanding :model="model" :lightIntensity="lightIntensity" />
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
  },
  computed: {},
};
</script>


<style lang="scss">
$mp: 24px;

.landing {
  width: 100vw;
  margin-left: 50%;
  height: calc(95vh - 124px);
  margin-bottom: 49px;
  transform: translateX(-50%);
  font-size: 1vw;
  color: black;
  margin-top: 71px;

  @media only screen and (max-width: 588px) {
    height: calc(95vh - 194px);
  }
}
</style>