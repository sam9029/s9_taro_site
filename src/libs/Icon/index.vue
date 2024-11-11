<template>
  <div>
    HIHI
    <svg class="icon sn-icon__wrapper" aria-hidden="true">
      <use :href="icon"></use>
    </svg>
  </div>
</template>

<script setup lang="js">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'shouye',
  },
})

const icon = computed(() => `#${props.name}`)
</script>

<style lang="scss" scoped>
/** icon */
.icon {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.sn-icon__wrapper {
}
</style>
