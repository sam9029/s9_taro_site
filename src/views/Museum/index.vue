<template>
  <div
    class="museum__wrapper w-full h-full flex justify-center items-start pt-[100px] overflow-x-hidden overflow-y-auto"
  >
    <div class="w-full max-w-screen-xl py-2 px-4 md:px-6 relative">
      <!-- /** 类型 */ -->
      <div role="tablist" class="ui-tabs ui-tabs-boxed glass sticky top-2 overflow-x-auto">
        <a
          role="tab"
          class="ui-tab text-nowrap"
          v-for="(item, index) in TARO_TYPE_OPTIONS"
          :class="[cur_type === item.prop ? 'ui-tab-active' : '']"
          :key="item.prop"
          @click="cur_type = item.prop"
        >
          <!-- {{ index }} -->
          {{ item.label }} ({{ item.amount }})
        </a>
      </div>

      <!-- /** 类型卡牌集合 */ -->
      <div class="py-4 flex gap-10 flex-wrap justify-center items-center">
        <div
          class="p-2 bg-slate-100 rounded-md flex gap-2 flex-col justify-center items-center cursor-pointer"
          v-for="(value, key) in cur_options"
        >
          <div>
            <img
              @click="openCardDetail(key, $event)"
              class="w-[180px] h-[320px] rounded-md"
              :src="value.cover_url"
              alt=""
            />
          </div>
          <div v-if="cur_type === 'UPPER_ARCANA'" class="font-bold">
            {{ value.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- 大图详情处理 -->
    <Transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <CardDetail :name="cur_select_card_detail.name" v-if="card_detail_visible" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ref, computed, nextTick, toValue, toRef } from 'vue'
import { useEventListener, useElementBounding } from '@vueuse/core'

import CardDetail from './Components/cardDetail.vue'

import {
  TARO_TYPE_OPTIONS,
  UPPER_ARCANA_MAPPER,
  CUPS_MAPPER,
  SWORDS_MAPPER,
  PENTACLES_MAPPER,
  WANDS_MAPPER,
} from '@/enum/taro_enum'

const cur_type = ref('UPPER_ARCANA')
const cur_options = computed(() => {
  return {
    UPPER_ARCANA: UPPER_ARCANA_MAPPER,
    CUPS: CUPS_MAPPER,
    SWORDS: SWORDS_MAPPER,
    PENTACLES: PENTACLES_MAPPER,
    WANDS: WANDS_MAPPER,
  }[cur_type.value]
})

const card_detail_visible = ref<boolean>(false)
const cur_select_card_detail = ref<any>({
  name: '',
})

/**
 * 监听浏览器后退按钮事件
 */
useEventListener(window, 'popstate', () => {
  card_detail_visible.value = false
})

const openCardDetail = async (name: string, el: any) => {
  await nextTick()
  history.pushState('', '', `/card/${name}`)

  const { x, y, width, height } = el?.target.getBoundingClientRect()
  cur_select_card_detail.value = {
    name,
    translateX: parseInt(x + width / 2),
    translateY: parseInt(y + height / 2),
  }
  card_detail_visible.value = true
}

/**
 * 进入动画开始前
 */
const beforeEnter = (el) => {
  gsap.set(el, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: '0 0',
    translateX: cur_select_card_detail.value.translateX,
    translateY: cur_select_card_detail.value.translateY,
    opacity: 0,
  })
}
/**
 * 进入动画执行中
 */
const enter = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    onComplete: done,
  })
}
/**
 * 离开动画执行中
 */
const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 0,
    scaleY: 0,
    x: cur_select_card_detail.value.translateX,
    y: cur_select_card_detail.value.translateY,
    opacity: 0,
  })
}
</script>

<style lang="scss" scoped>
.museum__wrapper {
}
</style>
