<template>
  <!-- 头部 -->
  <header
    class="nav__wrapper z-20 max-w-screen-xl w-[80%] fixed left-[50%] translate-x-[-50%] px-4 py-2 mt-6 mx-auto flex justify-between items-center border-b border-b-zinc-200 rounded-full shadow-md"
  >
    <div></div>
    <div class="flex justify-between">
      <div class="group/theme px-4 cursor-pointer relative">
        <sn-icon name="icon-taiyang" />

        <div
          class="group-hover/theme:flex hidden min-w-[100px] absolute top-[100%] right-0 p-2 flex-col justify-start items-center cursor-pointer rounded bg-slate-50 dark:bg-zinc-900 duration-500 delay-500"
        >
          <div
            class="w-full rounded-md p-2 hover:bg-zinc-300 flex gap-2 justify-center items-center"
            onclick="toggleTheme()"
          >
            <sn-icon name="icon-taiyang" />
            <div class="text-nowrap">白昼</div>
          </div>

          <div
            class="w-full rounded-md p-2 hover:bg-zinc-300 flex gap-2 justify-center items-center"
            onclick="toggleTheme()"
          >
            <sn-icon name="icon-yueliang" />
            <div class="text-nowrap">极夜</div>
          </div>
        </div>
      </div>

      <!-- <div class="group/local px-4 cursor-pointer relative">
        <div>local</div>
        <div class="group-hover/local:block hidden duration-500 absolute top-[100%] right-0">
          <button class="">简体中文</button>
          <button class="">English</button>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'

// 切换主题函数
function toggleTheme() {
  // 获取 body 元素
  var body = document.body

  // 检查 body 是否有 'dark' 类
  if (body.classList.contains('dark')) {
    // 如果有 'dark' 类，则移除该类，添加 'light' 类
    body.classList.remove('dark')
    body.classList.add('light')
  } else {
    // 如果没有 'dark' 类，则添加 'dark' 类，移除 'light' 类
    body.classList.remove('light')
    body.classList.add('dark')
  }
}
</script>

<style lang="scss" scoped>
.nav__wrapper {
  background-image: radial-gradient(transparent 1px, white 1px);
  background-size: 3px 3px;
  backdrop-filter: saturate(100%) blur(50px);
}
</style>
