<template>
  <!--  -->
  <Teleport to="body">
    <dialog v-if="visiable" :id="dialog_id" class="ui-modal" >
      <div class="ui-modal-box" :class="className">
        <div>
          <slot name="header"></slot>
        </div>
        <div>
          <slot></slot>
        </div>
        <slot name="header">
          <div class="ui-modal-action">
            <form method="dialog">
              <button class="ui-btn mr-2 w-24" @click="close">取消</button>
              <button class="ui-btn ui-btn-primary w-24" @click="confirm">确认</button>
            </form>
          </div>
        </slot>
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="js">
import { ref, computed, onMounted, nextTick } from 'vue'

import { getRandomString } from '@/utils/randomString'

const EMITS_OPEN = 'open'
const EMITS_CLOSE = 'close'
const EMITS_CONFIRM = 'confirm'
const emits = defineEmits([EMITS_OPEN, EMITS_CLOSE, EMITS_CONFIRM])

const props = defineProps({
  className: {
    type: String,
    default: null,
  },
})

// 生成dialog_id 供 dasiy 的 dialog 使用（其根据dialog_id来控制隐现）
const dialog_id = ref('default')
const visiable = ref(false)

function init() {
  const id = 'modal_' + getRandomString(16)
  dialog_id.value = id
}

function open(_num) {
  visiable.value = true
  nextTick(() => {
    window[dialog_id.value]?.showModal()
  })
  emits(EMITS_OPEN)
}

// flag标识：非close直接的触发事件（如提交手动触发时），无须触发EMITS_CLOSE的自定义事件回调，
function close(flag = true) {
  visiable.value = false
  window[dialog_id.value].close()
  if (flag) {
    emits(EMITS_CLOSE)
  }
}

function confirm() {
  emits(EMITS_CONFIRM)
  close(false)
}

init()

defineExpose({
  open,
  close,
})
</script>

<style lang="scss" scoped>
.container__wrapper {
}
</style>
