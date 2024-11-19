<template>
  <div class="home__wrapper w-full h-full p-4 pt-16">
    <div class="w-full h-full flex justify-center items-center">
      <div v-if="introVisible" class="intro__wrapper max-w-screen-xl">
        <!-- <h1 class="mb-4 text-6xl font-bold">
          神秘之镜：<span
            class="font-bold"
            style="
              background-image: linear-gradient(
                90deg,
                oklch(var(--s)) 4%,
                color-mix(in oklch, oklch(var(--s)), oklch(var(--er))) 22%,
                oklch(var(--p)) 45%,
                color-mix(in oklch, oklch(var(--p)), oklch(var(--a))) 67%,
                oklch(var(--a)) 100.2%
              );
              -webkit-text-fill-color: transparent;
              background-clip: text;
            "
            >{{ 'Tarot' || '塔罗牌'}}</span
          >
        </h1>
        <p class="my-4 text-2xl">
          78张艺术之卡，蕴含古老的智慧与象征，它们不仅是占卜的工具，更是心灵的导航，引领我们在人生旅途中探寻答案，启迪内在的洞见
        </p> -->
        <!-- <div>
          <h1 class="mb-4 text-6xl font-bold">Test</h1>
          <p class="my-4 text-2xl">
            <span>的的的的的的的的的的的的的的的的的</span>
          </p>
        </div> -->
        <div class="my-4 text-base flex gap-4">
          <button @click="handleShowCard" class="ui-btn">{{ '抽取卡牌' }}</button>
          <button @click="handleShowFireworks" class="ui-btn">🎉🎉🎉</button>
        </div>
      </div>
      <Tarot v-if="TarotVisible"></Tarot>
    </div>

    <!-- <ui-alert :duration="200000">
      dasalhdksafkakfs
    </ui-alert> -->
  </div>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'
import Tarot from '@/views/Tarot/index.vue'


const introVisible = ref(true)
const TarotVisible = ref(false)

function handleShowCard() {
  introVisible.value = false
  TarotVisible.value = true
}

function handleShowFireworks() {}


</script>

<style lang="scss" scoped>
.home__wrapper {
}
</style>
