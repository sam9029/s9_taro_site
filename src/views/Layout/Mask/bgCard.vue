<template>
  <div
    class="bg-card__wrapper opacity-60 absolute top-0 right-0 left-0 bottom-0 m-auto flex justify-center items-center z-lowest"
  >
    <img
      v-for="item in list"
      :key="item"
      class="w-[240px] h-[320px] shadow-2xl select-none duration-500 rounded-md"
      :style="{ '--i': item }"
      :src="cardBackJpg"
      alt=""
    />
  </div>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'
import cardBackJpg from '@/assets/imgs/card_back.jpg'

const list = [-2, -1, 0, 1, 2]
</script>

<style lang="scss" scoped>
.bg-card__wrapper {
  img {
    transform: rotate(calc(var(--i)* 340deg)) translate(calc(var(--i)* 100px), -50px);;
  }
}
</style>
