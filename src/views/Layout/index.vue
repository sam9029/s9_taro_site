<template>
  <div class="layout__wrapper w-screen h-screen">
    <Nav></Nav>
    <Float></Float>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="js">
import Nav from './Nav/index.vue'
import Float from './Float/index.vue'
</script>

<style lang="scss" scoped>
.layout__wrapper {
}
</style>
