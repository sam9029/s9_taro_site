<template>
  <!-- 头部 -->
  <aside
    class="float__wrapper z-20 fixed right-2 top-1/2 translate-y-[-50%] p-4 rounded-xl shadow-md cursor-pointer bg-zinc-500/60 dark:bg-zinc-900 duration-500 delay-500"
  >
    <!-- <div class="font-bold p-2 bg-slate-100/90 rounded-md" @click="toggleView">首页</div> -->
    <!-- <div class="font-bold p-2" @click="toggleView">博物馆</div> -->

    <sn-icon name="icon-shouye" />
    <sn-icon name="icon-bowuguan" />
  </aside>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'

// 切换主题函数
function toggleView() {}
</script>

<style lang="scss" scoped>
.float__wrapper {
  background-image: radial-gradient(transparent 1px, white 1px);
  background-size: 3px 3px;
  backdrop-filter: saturate(100%) blur(50px);
}
</style>
