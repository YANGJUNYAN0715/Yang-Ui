<template>
  <div class="y-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="y-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="y-card-summary">{{ summary }}</div>
    <div v-else class="y-card-summary"><slot></slot></div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "y-card",
  props: {
    width: {
      type: String,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
});
</script>
<style lang="less">
@import "./card.less";
</style>
