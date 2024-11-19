<template>
  <div class="mask__wrapper fixed top-0 left-0 z-lowest w-full h-full"></div>
</template>

<style lang="scss" scoped>
.mask__wrapper {
  background-image: repeating-linear-gradient(
    45deg,
    var(--fallback-b1, oklch(var(--b1))),
    var(--fallback-b1, oklch(var(--b1))) 13px,
    var(--fallback-b2, oklch(var(--b2))) 13px,
    var(--fallback-b2, oklch(var(--b2))) 14px
  );
  background-size: 40px 40px;
}
</style>
