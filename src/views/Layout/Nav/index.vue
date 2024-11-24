<template>
  <!-- 头部 -->
  <div
    class="ui-navbar max-w-screen-xl w-[88%] fixed top-4 left-0 right-0 m-auto z-layer1 shadow-2xl rounded-xl"
  >
    <div class="flex-1">
      <!-- <a class="ui-btn ui-btn-ghost text-xl">Tarot</a> -->
    </div>
    <div class="flex-none gap-2">
      <div class="ui-dropdown ui-dropdown-end">
        <button tabindex="0" role="button" class="ui-btn ui-btn-sm">主题</button>
        <ul
          tabindex="0"
          class="ui-menu ui-menu-sm ui-dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl"
        >
          <li class="w-full grid-cols-1" v-for="theme in THEME_LIST" :key="theme">
            <!-- 跟随系统 -->
            <template v-if="theme === 'system'">
              <div
                class="w-full block outline-base-content text-start outline-offset-4"
                @click="toggleTheme(theme)"
              >
                <button class="w-full block ui-btn px-4 py-3 bg-base-100">跟随系统</button>
              </div>
            </template>
            <!-- 渲染主题 -->
            <template v-else>
              <button
                class="w-full block outline-base-content text-start outline-offset-4"
                :data-set-theme="theme"
                @click="toggleTheme(theme)"
              >
                <div
                  class="bg-base-100 rounded-btn text-base-content w-full cursor-pointer font-sans flex justify-between items-center gap-4 px-4 py-3"
                  :data-theme="theme"
                >
                  <div class="flex-grow">{{ theme.toUpperCase() }}</div>
                  <div class="flex justify-between items-center gap-1">
                    <div class="bg-primary rounded-badge w-2 h-6"></div>
                    <div class="bg-secondary rounded-badge w-2 h-6"></div>
                    <div class="bg-accent rounded-badge w-2 h-6"></div>
                    <div class="bg-neutral rounded-badge w-2 h-6"></div>
                  </div>
                </div>
              </button>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, computed, onMounted } from 'vue'
import { useAppStore } from '@/stores/modules/app.ts'
import { THEME_LIST } from '@/constants'

const appStore = useAppStore()

// 切换主题函数
function toggleTheme(_theme) {
  // // dev-log >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  console.log(`[Dev_Log][${'hi'}_]_>>>`)
  appStore.changeTheme(_theme)
}
</script>

<style lang="scss" scoped>
.nav__wrapper {
  background-image: radial-gradient(transparent 1px, white 1px);
  background-size: 3px 3px;
  backdrop-filter: saturate(100%) blur(50px);
}
.ui-navbar{
  min-height: unset;
}
</style>
