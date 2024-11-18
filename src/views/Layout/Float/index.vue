<template>
  <!-- 头部 -->
  <aside
    class="float__wrapper z-20 fixed right-2 top-1/2 translate-y-[-50%] p-2 rounded-xl shadow-md cursor-pointer"
  >
    <div class="relative">
      <div
        class="w-[40px] h-[60px] bg-slate-50/80 rounded-xl absolute z-[-1] duration-300"
        :class="[isHome ? 'top-0' : 'top-1/2']"
      ></div>
      <div class="font-bold px-2 py-4" @click="toggleView('/')">
        <ui-icon name="icon-shouye" />
      </div>
      <div class="font-bold px-2 py-4">
        <ui-icon name="icon-bowuguan" @click="toggleView('/museum')" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="js">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isHome = computed(() => route.path === '/')

// 切换主题函数
function toggleView(_path) {
  router.push(_path)
}
</script>

<style lang="scss" scoped>
.float__wrapper {
}
</style>
