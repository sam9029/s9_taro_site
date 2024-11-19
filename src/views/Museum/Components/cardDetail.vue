<template>
  <div
    class="card-detail__wrapper fixed left-0 top-0 z-20 w-screen h-screen flex justify-center items-center glass"
  >
    <div
      class="ui-mockup-window border-base-300 border shadow-md w-[80%] h-[90%] md:w-[70%] relative"
    >
      <div class="absolute top-3 right-6 z-30 cursor-pointer rounded-md" @click="goBack">X</div>
      <div
        v-if="props.name"
        class="border-base-300 flex flex-col sm:flex-row gap-5 justify-center items-center border-t px-4 py-12"
      >
        <div>
          <img
            class="w-[180px] h-[320px] rounded-md shadow-md p-1 bg-slate-100/50"
            :src="imgInfo.cover_url"
            alt=""
          />
        </div>
        <div>
          <div class="text-[68px] font-bold">{{ imgInfo.name }}</div>
          <div class="font-bold mt-4 text-zinc-900">正位：{{ imgInfo.description }}</div>
          <div class="font-bold mt-4 text-zinc-900">逆位：{{ imgInfo.reversed_description }}</div>
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center"  v-else>
        <span class="ui-loading ui-loading-spinner ui-loading-lg"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TARO_MAPPER } from '@/enum/taro_enum.ts'
const TARO_NAME_MAPPER = Object.keys(TARO_MAPPER)
</script>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
})

const imgInfo = computed(() => {
  if (!props.name) return {}
  return TARO_MAPPER[props.name]

  return {
    name: '宝剑三',
    description: '象征痛苦与分离，代表心碎与情感上的创伤。',
    reversed_description: '象征伤痛的愈合或更深层次的创伤。',
    cover_url: 'https://i.ibb.co/ZLhNLsP/Three-Of-Swords.jpg',
  }
})

const goBack = () => {
  router.back()
}
</script>

<style></style>
