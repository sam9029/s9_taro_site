<template>
  <div class="layout__wrapper w-screen h-screen overflow-hidden">
    <Mask></Mask>
    <Nav></Nav>
    <Float></Float>
    <RouterView v-slot="{ Component }">
      <Transition name="layout">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </Transition>
    </RouterView>

    <!-- 音乐播放器 -->
     <!-- <div class="opacity-0"> -->
       <meting-js class=".metingjs" server="netease" type="song" id="510953935" listFolded="true" fixed="true" mini="true"> </meting-js>
     <!-- </div> -->
  </div>
</template>

<script setup lang="js">
// import { nextTick } from 'vue'
import Mask from './Mask/index.vue'
import Nav from './Nav/index.vue'
import Float from './Float/index.vue'
</script>

<style lang="scss" scoped>
.layout__wrapper {
  // layout页面时：新页面的进入动画
  .layout-enter-active {
    animation-name: layout-in;
    animation-duration: 0.4s;
  }
  // layout页面时：老页面的退出动画
  .layout-leave-active {
    animation-name: layout-out;
    animation-duration: 0.4s;
  }
  // layout页面时：新页面的进入动画
  @keyframes layout-in {
    0% {
      transform: translate(0, 100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  // layout页面时：老页面的退出动画
  @keyframes layout-out {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -100%);
    }
  }
}
</style>
