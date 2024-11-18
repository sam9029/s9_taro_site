<template>
  <svg class="icon ui-icon__wrapper" aria-hidden="true">
    <use :href="icon"></use>
  </svg>
</template>

<script setup lang="js">
import { computed, watchEffect } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'shouye',
  },
  fill: {
    type: String,
    default: null,
  },
})

const icon = computed(() => `#${props.name}`)

/** 无需指明监听对象，直接在回调中使用即可，且可以使用多个响应式值 */
watchEffect(() => {
  /** 改变svg的颜色 */
  if (props.fill) {
    const styleEl = document.createElement('style')
    const temp = `${icon.value} > path { fill: ${props.fill} }`
    styleEl.innerText = temp
    document.body.append(styleEl)
  }
})
</script>

<style lang="scss" scoped>
/** icon */
.icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.ui-icon__wrapper {
}
</style>
