<template>
  <!-- 头部 -->
  <header
    class="nav__wrapper z-20 max-w-screen-xl w-[80%] fixed left-[50%] translate-x-[-50%] px-4 py-2 mt-6 mx-auto flex justify-between items-center border-b border-b-zinc-200 rounded-full shadow-md"
  >
    <div></div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn m-1">Hover</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
    <div class="flex justify-between">
      <!-- <div class="group/theme  cursor-pointer relative"> -->
      <div class="dropdown dropdown-hover dropdown-end px-4 cursor-pointer relative">
        <div tabindex="0" role="button">
          <ui-icon name="icon-taiyang" />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button
              class="w-full outline-base-content text-start outline-offset-4 [&amp;_svg]:visible"
              data-act-class="[&amp;_svg]:visible"
              data-set-theme="light"
              @click="toggleTheme('light')"
            >
              <span
                class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                data-theme="light"
              >
                <span class="grid grid-cols-5 grid-rows-3">
                  <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <span class="flex-grow">light</span>
                    <span class="flex h-full shrink-0 flex-wrap gap-1"
                      ><span class="bg-primary rounded-badge w-2"></span>
                      <span class="bg-secondary rounded-badge w-2"></span>
                      <span class="bg-accent rounded-badge w-2"></span>
                      <span class="bg-neutral rounded-badge w-2"></span>
                    </span>
                  </span>
                </span>
              </span>
            </button>
          </li>
          <li>
            <button
              class="w-full outline-base-content text-start outline-offset-4"
              data-act-class="[&amp;_svg]:visible"
              data-set-theme="dark"
              @click="toggleTheme('dark')"
            >
              <span
                class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                data-theme="dark"
                ><span class="grid grid-cols-5 grid-rows-3"
                  ><span
                    class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
                  >
                    <span class="flex-grow">Dark</span>
                    <span class="flex h-full shrink-0 flex-wrap gap-1"
                      ><span class="bg-primary rounded-badge w-2"></span>
                      <span class="bg-secondary rounded-badge w-2"></span>
                      <span class="bg-accent rounded-badge w-2"></span>
                      <span class="bg-neutral rounded-badge w-2"></span></span></span></span
              ></span>
            </button>
          </li>
          <li>
            <button
              class="w-full outline-base-content text-start outline-offset-4"
              data-act-class="[&amp;_svg]:visible"
              data-set-theme="valentine"
              @click="toggleTheme('valentine')"
            >
              <span
                class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                data-theme="valentine"
                ><span class="grid grid-cols-5 grid-rows-3"
                  ><span
                    class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
                  >
                    <span class="flex-grow">Valentine</span>
                    <span class="flex h-full shrink-0 flex-wrap gap-1"
                      ><span class="bg-primary rounded-badge w-2"></span>
                      <span class="bg-secondary rounded-badge w-2"></span>
                      <span class="bg-accent rounded-badge w-2"></span>
                      <span class="bg-neutral rounded-badge w-2"></span></span></span></span
              ></span>
            </button>
          </li>
        </ul>
      </div>
      <!-- </div> -->

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
import { useAppStore } from '@/stores/modules/app.ts'

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
</style>
