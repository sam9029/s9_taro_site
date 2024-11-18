<template>
  <div
    v-if="isVisible"
    class="selected-card__wrapper fixed top-12 md:top-0 bottom-0 left-0 right-0 m-auto glass w-[90%] h-[80%] md:w-[80%] md:max-w-screen-xl md:h-[80%] rounded-md shadow-md"
  >
    <!-- 卡牌选中面板 -->
    <div class="selected-panel__wrapper">
      <div class="flex justify-between items-center border-b border-b-zinc-200 px-8 py-4">
        <h3 class="text-2xl font-bold">您选择了</h3>
        <p class="cursor-pointer text-sm" @click="close">X</p>
      </div>
      <div
        v-if="selectedCard.length"
        class="flex flex-col md:flex-row justify-between items-center gap-[20px] p-8 h-[580px] overflow-y-auto"
      >
        <div
          v-for="item in selectedCard"
          :key="item.prop"
          class="ui-card max-w-64 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              :class="[item.position === 'reversed' ? 'rotate-180' : '']"
              :src="item.cover_url"
              :alt="item.prop"
            />
          </figure>
          <div class="ui-card-body">
            <h2 class="ui-card-title">{{ item.name }}</h2>
            <p class="text-sm">
              {{ item.position === 'reversed' ? item.reversed_description : item.description }}
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'
import { handleExtractCard } from '../index'

const isVisible = ref(false)
const selectedCard = ref([])

function open() {
  isVisible.value = true
  selectedCard.value = handleExtractCard()
}

function close() {
  isVisible.value = false
  selectedCard.value = []
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped>
.selected-card__wrapper {
}
</style>
