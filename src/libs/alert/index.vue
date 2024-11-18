<!-- *** 组件基于 tailwindcss + daisyui *** -->
<template>
  <Transition name="alert">
    <div
      v-if="isShowAlert"
      role="alert"
      class="ui-alert fixed top-4 left-0 right-0 m-auto max-w-96 z-topest shadow-lg"
      :class="{
        'ui-alert-info': props.type === 'info',
        'ui-alert-success': props.type === 'success',
        'ui-alert-warning': props.type === 'warning',
        'ui-alert-error': props.type === 'error',
      }"
    >
      <span><slot name="icon"></slot></span>
      <span>
        <slot>{{ $slots.default || props.message || 'alert提示' }}</slot>
      </span>
      <button
        v-if="props.showClose"
        class="ui-btn ui-btn-sm"
        :class="{
          'ui-btn-info': props.type === 'info',
          'ui-btn-success': props.type === 'success',
          'ui-btn-warning': props.type === 'warning',
          'ui-btn-error': props.type === 'error',
        }"
        @click="onClose"
      >
        X
      </button>
    </div>
  </Transition>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'

const EMIT_CLOSE = 'close'

const emits = defineEmits([EMIT_CLOSE])
const props = defineProps({
  type: {
    type: [String, null],
    default: null,
  },
  icon: {
    type: [String, null],
    default: null,
  },
  message: {
    type: [String, null],
    default: null,
  },
  duration: {
    type: [Number, null],
    default: 2000000,
  },
  showClose: {
    type: [Boolean, null],
    default: true,
  },
})

const isShowAlert = ref(false)

/** 定时器--定时关闭Alert */
let timer = null
const createTimer = () => {
  timer = setTimeout(() => {
    isShowAlert.value = !isShowAlert.value
  }, props.duration)
}

const onClose = () => {
  isShowAlert.value = false
  timer && clearTimeout(timer)
  emits(EMIT_CLOSE)
}

onMounted(() => {
  isShowAlert.value = true
  createTimer()
})
</script>

<style>

.ui-alert{
  width: 90%;
  grid-template-columns: 1fr 3fr 1fr;
}
.alert-enter-from {
  transform: translateY(-200px);
}

.alert-enter-active {
  transition: all 0.5s ease;
}

.alert-enter-to {
  transform: translateY(0px);
}

.alert-leave-from {
  transform: translateY(0px);
}

.alert-leave-active {
  transition: all 0.5s ease;
}

.alert-leave-to {
  transform: translateY(-200px);
}
</style>
