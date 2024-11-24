<template>
  <div
    v-if="isVisible"
    class="selected-card__wrapper fixed top-12 md:top-0 bottom-0 left-0 right-0 m-auto glass w-[90%] h-[80%] md:w-[80%] md:max-w-screen-xl rounded-md shadow-md z-layer1"
  >
    <!-- 卡牌选中面板 -->
    <div class="selected-panel__wrapper h-full">
      <div class="flex justify-between items-center border-b border-b-zinc-200 px-8 py-4 h-[15%]">
        <h3 class="text-2xl font-bold">您选择了</h3>
        <p class="cursor-pointer text-sm" @click="close">X</p>
      </div>
      <div class="p-8 max-h-[85%] overflow-y-auto overflow-hidden">
        <div
          v-if="selectedCard.length"
          class="flex flex-col md:flex-row flex-wrap justify-start items-start gap-[20px]"
        >
          <div
            v-for="item in selectedCard"
            :key="item.prop"
            class="ui-card min-w-48 max-w-64 bg-base-100 shadow-xl flex-1"
          >
            <figure>
              <img
                :class="['w-[150px] h-[260px]', item.position === 'reversed' ? 'rotate-180' : '']"
                :src="item.cover_url"
                :alt="item.prop"
              />
            </figure>
            <div class="ui-card-body">
              <h2 class="ui-card-title">
                {{ item.name
                }}<span class="text-sm"
                  >({{ item.position === 'reversed' ? '逆位' : '正位' }})</span
                >
              </h2>
              <p class="text-sm">
                {{ item.position === 'reversed' ? item.reversed_description : item.description }}
              </p>
            </div>
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
const selectedCardNum = ref(null)


function open(_num) {
  isVisible.value = true
  selectedCardNum.value = _num
  selectedCard.value = handleExtractCard(_num)
}

function close() {
  isVisible.value = false
  selectedCardNum.value = null
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
