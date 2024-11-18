<template>
  <div class="tarot__wrapper w-full h-full relative">
    <!-- 卡牌渲染 -->
    <div ref="containerRef" class="tarot-circle__container">
      <!-- 卡片将通过 JavaScript 动态生成 -->
    </div>

    <!-- 确认 -->
    <button
      v-if="isShowConfirmBtn"
      id="confirmBtn"
      @click="handleConfirm"
      class="ui-btn absolute bottom-28 right-10 px-16 py-4 w-48"
    >
      确认
    </button>

    <!-- 重新发牌 -->
    <button
      id="confirmBtn"
      @click="resetCardCircle"
      class="ui-btn absolute bottom-10 right-10 px-16 py-4 w-48"
    >
      重新发牌
    </button>

    <Transition>
      <SelectedCardPanel ref="selectedCardPanelRef"></SelectedCardPanel>
    </Transition>
  </div>
</template>

<script lang="js">
let container = null // 用于存储容器元素
let containerHasClickEvent = false // 是否已经绑定click事件
let cardsData = [] // 用于存储卡片位置数据
let selectedCards = [] // 存储已抽取的卡片
</script>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'

import SelectedCardPanel from './Components/selectedCard.vue'
import { uiAlert } from '@/libs'

import {
  totalCards,
  cardWidth,
  cardHeight,
  maxSelectedCards,
  radius,
  hoverDistance,
  angleStep,
} from './index'

const isShowConfirmBtn = ref(false)

const selectedCardPanelRef = ref(null)

/** 重置卡牌容器&清除选中 */
function clearCardsData() {
  container.innerHTML = null
  selectedCards = []
  cardsData = []
}

/** 绘画卡牌动画 */
function drawerCardCircle() {
  container = document.querySelector('.tarot-circle__container') // 获取容器元素
  const containerCenterX = container.offsetWidth / 2 // 容器的中心X坐标
  const containerCenterY = container.offsetHeight / 2 // 容器的中心Y坐标

  // 动态生成卡片
  for (let i = 1; i <= totalCards; i++) {
    const card = document.createElement('div')
    card.classList.add('tarot-card')
    card.innerHTML = `<div class='tarot-card-back'></div>`

    // 计算每张卡片的角度
    const angle = angleStep * i
    const cos = (angle * Math.PI) / 180
    const sin = (angle * Math.PI) / 180

    const x = containerCenterX + radius * Math.cos(cos) - cardWidth / 2 // 减去卡片宽度的一半
    const y = containerCenterY + radius * Math.sin(sin) - cardHeight / 2 // 减去卡片高度的一半

    // 设置卡片的平移和旋转
    const finalTransform = `translate(${x}px, ${y}px) rotate(${angle}deg)`
    card.style.setProperty('--final-transform', finalTransform) // 最终位置用
    card.style.setProperty('--i', i) // 动画延迟用
    card.style.setProperty('--tarot-card-width', cardWidth + 'px') // 卡片宽
    card.style.setProperty('--tarot-card-height', cardHeight + 'px') // 卡片高

    // 计算悬停时卡片向圆外的移动方向
    const hoverX = hoverDistance * Math.cos((angle * Math.PI) / 180)
    const hoverY = hoverDistance * Math.sin((angle * Math.PI) / 180)
    const hoverTransform = `translate(${x + hoverX}px, ${y + hoverY}px) rotate(${angle}deg)`
    card.style.setProperty('--hover-transform', hoverTransform) // 设置悬停时的移动方向

    cardsData.push(card)
  }

  container.append(...cardsData)

  // 使用事件委托在父元素上绑定点击事件
  bindCardClickEvent()
}

/** 逆向动画：卡片离开 */
function resetCardCircle() {
  // 定义动画结束后的处理函数
  let lastCard = null
  const handleAnimationEnd = () => {
    // 清除之前的cardEl--DOM
    clearCardsData()
    // 重新创建卡片
    drawerCardCircle()

    // 动画完成后移除监听器
    lastCard.removeEventListener('animationend', handleAnimationEnd)
  }

  cardsData.forEach((card, index) => {
    card.style.animation = 'moveToCenter 1s backwards'
    card.style.animationDelay = `${index * 0.01}s` // 延迟效果，逐个执行

    // 追加动画执行监听器
    if (index + 1 === cardsData.length) {
      lastCard = card
      // 添加动画结束事件监听器
      card.addEventListener('animationend', handleAnimationEnd)
    }
  })
}

/** 卡牌点击选中事件 */
function bindCardClickEvent() {
  // 使用事件委托在父元素上绑定点击事件
  if (!containerHasClickEvent) {
    container.addEventListener('click', (event) => {
      /**
       * closest(".tarot-card") 从触发事件的元素开始，向上寻找最接近的匹配指定选择器的祖先元素
       * 在这个例子中，它会从 event.target 开始，寻找离它最近的带有 .card 类名的祖先元素。
       * */
      const clickedCard = event.target.closest('.tarot-card')

      if (clickedCard) {
        // 如果该卡片已经抽取，恢复原位
        if (clickedCard.classList.contains('selected')) {
          clickedCard.classList.remove('selected')
          selectedCards = selectedCards.filter((c) => c !== clickedCard) // 从已选卡片中移除
        } else {
          // 如果尚未抽取且已有三张卡片，移除最早的一张
          if (selectedCards.length === maxSelectedCards) {
            const cardToReset = selectedCards.shift() // 移除数组中最早的卡片
            cardToReset.classList.remove('selected')
          }

          // 抽取当前卡片
          clickedCard.classList.add('selected')
          selectedCards.push(clickedCard) // 添加到已选卡片数组
        }
      }

      if (selectedCards.length == maxSelectedCards) {
        showConfirm(true)
      } else {
        showConfirm(false)
      }

      containerHasClickEvent = true
    })
  }
}

/** 选中满足条件的确认按钮展示 */
function showConfirm(flag) {
  isShowConfirmBtn.value = flag
}

/** 选中后确认 */
function handleConfirm() {
  if (selectedCards.length < maxSelectedCards) {
    return uiAlert({ type: 'warning', message: '至少抽取三张' })
  }

  showSelectedCardPanel()
  clearSelectedCard()
}

function clearSelectedCard() {
  selectedCards.map((clickedCard) => {
    clickedCard.classList.remove('selected')
  })
  selectedCards = []
  showSelectedCardPanel()
  showConfirm(false)
}

function showSelectedCardPanel() {
  selectedCardPanelRef.value.open()
}

onMounted(() => {
  // 在组件挂载后执行
  drawerCardCircle()
})
</script>

<style lang="scss">
.tarot__wrapper {
}

.tarot-circle__container {
  position: relative;
  width: 100%;
  height: 100%;
}

.tarot-card {
  padding: 10px;
  position: absolute;
  width: var(--tarot-card-width);
  height: var(--tarot-card-height);
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;

  opacity: 0; /* 初始透明 */
  transform-origin: center; /* 动画起点 */
  animation: moveToCircle 1s ease forwards; /* 添加动画 */
  animation-delay: calc(0.05s * var(--i)); /* 让每个卡片有不同的延迟 */

  /** 颜色渐变 */
  background-color: rgb(255, 255, 255);
  /* filter: hue-rotate(calc(var(--i) * 1deg)); */

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* 添加过渡效果 */
}

/** 鼠标悬停 & 被选中时 效果 */
.tarot-card:hover,
.tarot-card.selected {
  /** 加 !important 提高权重使 transform 生效，因为CSS 中 @keyframes 动画的优先级比 hover 的静态样式高 */
  transform: var(--hover-transform) scale(1.1) !important; /* 上移10px并放大1.1倍 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.tarot-card .tarot-card-back {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/imgs/card_back.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
}

@keyframes moveToCircle {
  from {
    transform: translate(0, 0) rotate(0deg); /* 从中心开始 */
    opacity: 0; /* 初始不可见 */
  }
  to {
    transform: var(--final-transform); /* 最终位置 */
    opacity: 1; /* 最终可见 */
  }
}

@keyframes moveToCenter {
  from {
    transform: var(--final-transform); /* 最终位置 */
    opacity: 1;
  }
  to {
    transform: translate(80vw, 0) rotate(0deg); /* 从中心开始 */
    opacity: 0;
  }
}

/* transiton */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
