<template>
  <div class="c-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-checkbox-group',
  props: {
    value: {
      type: [Array],
      default: function () {
        return []
      }
    }
  },
  created () {
    this.$on('onChange', (value) => {
      this.$emit('input', value)
    })
  }
}
</script>
