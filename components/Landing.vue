<template>
  <div class="landing">
    <client-only>
      <ThreeDeeLanding :model="model" :lightIntensity="lightIntensity" />
    </client-only>
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
      default: 1,
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
  // bordeR: 1px dashed red;
}
</style>
