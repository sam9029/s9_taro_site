<template>
  <!--  -->
  <Teleport to="body">
    <dialog v-if="visiable" :id="dialog_id" class="ui-modal">
      <div class="ui-modal-box">
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

const EMITS_OPEN = 'open'
const EMITS_CLOSE = 'close'
const EMITS_CONFIRM = 'confirm'
const emits = defineEmits([EMITS_OPEN, EMITS_CLOSE, EMITS_CONFIRM])

// 生成dialog_id 供 dasiy 的 dialog 使用（其根据dialog_id来控制隐现）
const dialog_id = ref('default')
const visiable = ref(false)

function init() {
  const id = 'modal_' + window.crypto.randomUUID().split('-')[0]
  dialog_id.value = id
}

function open(_num) {
  visiable.value = true
  nextTick(() => {
    window[dialog_id.value]?.showModal()
  })
  emits(EMITS_OPEN)
}

function close(type = EMITS_CLOSE) {
  visiable.value = false
  window[dialog_id.value].close()
  if (type != EMITS_CONFIRM) {
    emits(EMITS_CLOSE)
  }
}

function confirm() {
  emits(EMITS_CONFIRM)
  close(EMITS_CONFIRM)
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
