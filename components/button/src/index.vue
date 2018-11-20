<template>
  <button class="c-btn" :class="[`bg-${variant}`, `hover:bg-${variant}-dark`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'c-button',
  props: {
    size: {
      default: 'default'
    },
    variant: {
      default: 'grey'
    },
    msg: String
  },
  data () {
    return {
      // menus: []
    }
  }
}
</script>

<style lang="scss" scoped>
.c-btn {
  @apply text-white py-2 px-4 rounded;
  + .c-btn {
    @apply ml-2
  }
}
</style>
