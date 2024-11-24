<template>
  <div class="mask__wrapper fixed top-0 left-0 z-lowest w-full h-full">
    <!-- <BgCard></BgCard> -->
  </div>
</template>

<script setup lang="ts">
import BgCard from './bgCard.vue'
</script>

<style lang="scss" scoped>
.mask__wrapper {
  // 斜线背景 **********************
  // background-image: repeating-linear-gradient(
  //   45deg,
  //   var(--fallback-b1, oklch(var(--b1))),
  //   var(--fallback-b1, oklch(var(--b1))) 13px,
  //   var(--fallback-b2, oklch(var(--b2))) 13px,
  //   var(--fallback-b2, oklch(var(--b2))) 14px
  // );
  // background-size: 40px 40px;

  // 网格背景 **********************
  background-image: linear-gradient(to right, rgba(234, 234, 234, .6) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(234, 234, 234, .6) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: center center;
}
</style>
