<template>
  <div class="c-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-radio-group',
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  },
  created () {
    this.$on('onChange', value => {
      this.$emit('input', value)
    })
  }
}
</script>
