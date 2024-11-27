<template>
  <div
    ref="homeRef"
    class="home__wrapper w-full h-full overflow-x-hidden overflow-y-auto p-4 pt-32 md:pt-24 relative"
  >
    <div class="w-full h-full flex justify-center items-center">
      <div v-if="introVisible" class="intro__wrapper max-w-[88%]">
        <h1 class="mb-4 text-5xl md:text-6xl font-bold">
          神秘之镜：<span class="font-bold tarot-text">{{ 'Tarot' || '塔罗牌' }}</span>
        </h1>
        <p class="my-4 text-xl md:text-2xl">
          78张艺术之卡，蕴含古老的智慧与象征，它们不仅是占卜的工具，更是心灵的导航，引领我们在人生旅途中探寻答案，启迪内在的洞见
        </p>
        <!-- <div>
          <h1 class="mb-4 text-6xl font-bold">Test</h1>
          <p class="my-4 text-2xl">
            <span>的的的的的的的的的的的的的的的的的</span>
          </p>
        </div> -->
        <div class="my-4 text-base max-w-60 flex gap-4 flex-col md:flex-row">
          <button @click="toggleTarotExtract" class="ui-btn ui-glass">{{ '随机抽取' }}</button>
          <button @click="openSelectNumInputDialog" class="ui-btn ui-btn-primary">
            {{ '限定抽取' }}
          </button>
          <button class="ui-btn ui-btn-primary ui-btn-disabled cursor-not-allowed">
            {{ '牌阵模式' }}
          </button>
          <button class="ui-btn ui-btn-outline ui-btn-secondary ui-btn-disabled cursor-not-allowed">
            {{ '专家模式' }}
          </button>
          <button @click="handleShowFireworks" class="ui-btn">🎉🎉🎉</button>
        </div>
      </div>
      <ui-dialog
        ref="selectNumInputDialogRef"
        className="max-w-96"
        @close="resetSelectedCardNum"
        @confirm="toggleTarotExtract"
      >
        <div class="flex flex-col">
          <div class="ui-label">
            <span class="ui-label-text">输入限定抽取卡牌数量</span>
          </div>
          <div class="flex justify-between">
            <button class="ui-btn mr-2 w-12" @click="handleSubtractSelectedCardNum">-</button>
            <input
              v-model="selectedCardNum"
              @input="validSelectedCardNumInput"
              type="number"
              placeholder="输入限定抽取卡牌数量"
              class="ui-input ui-input-bordered w-full max-w-xs"
            />
            <button class="ui-btn ml-2 w-12" @click="handlePlusSelectedCardNum">+</button>
          </div>
          <div class="ui-label">
            <span class="ui-label-text text-zinc-900/50">快捷选择</span>
          </div>
          <div class="mt-2 flex gap-2 justify-between">
            <button
              class="ui-btn flex-1"
              v-for="item in quickSelectOptions"
              :key="item"
              @click="handleQuickSelectedCardNum(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>
      </ui-dialog>
      <Tarot v-if="TarotVisible" :selectedCardNum="selectedCardNum"></Tarot>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Tarot from '@/views/Tarot/index.vue'

import Firework from '@/utils/fireworks'
import { uiAlert } from '@/libs'

let fireworkInstance
const homeRef = ref(null)

const quickSelectOptions = [1, 3, 6]

const introVisible = ref(true)
const TarotVisible = ref(false)
const selectedCardNum = ref(null)
const selectNumInputDialogRef = ref(null)

function handleShowFireworks() {
  // 随机位置触发烟花
  fireworkInstance.create()
}

function toggleTarotExtract() {
  introVisible.value = !introVisible.value
  TarotVisible.value = !TarotVisible.value
}

function openSelectNumInputDialog() {
  selectedCardNum.value = 1
  selectNumInputDialogRef.value?.open()
}

function resetSelectedCardNum() {
  selectedCardNum.value = null
}

function validSelectedCardNumInput(e) {
  const value = e.target.value
  if (value < 1) {
    selectedCardNum.value = 1
  } else if (value > 78) {
    selectedCardNum.value = 78
  }
}

function handleSubtractSelectedCardNum() {
  if (selectedCardNum.value > 1) {
    selectedCardNum.value--
  } else {
    uiAlert({ type: 'warning', message: '至少选1张卡牌' })
  }
}

function handlePlusSelectedCardNum() {
  if (selectedCardNum.value < 78) {
    selectedCardNum.value++
  } else {
    uiAlert({ type: 'warning', message: '至多选择78张卡牌' })
  }
}

function handleQuickSelectedCardNum(value){
  selectedCardNum.value = value
  toggleTarotExtract()
  selectNumInputDialogRef.value.close(false)
}

onMounted(() => {
  fireworkInstance = new Firework(homeRef.value)
})

onUnmounted(() => {
  fireworkInstance.destroy()
})
</script>

<style lang="scss" scoped>
.home__wrapper {
  .tarot-text {
    background-image: linear-gradient(
      90deg,
      hsl(var(--s)) 4%,
      hsl(var(--sf)) 22%,
      hsl(var(--p)) 45%,
      hsl(var(--a)) 67%,
      hsl(var(--a)) 100.2%
    );
    /* 设置背景剪裁为文字 */
    -webkit-background-clip: text; /* 对旧版 WebKit 浏览器的兼容 */
    background-clip: text;

    /* 使文本颜色透明，这样背景就能透过文字显示 */
    -webkit-text-fill-color: transparent; /* 对旧版 WebKit 浏览器的兼容 */
    text-fill-color: transparent;
  }
}
</style>
