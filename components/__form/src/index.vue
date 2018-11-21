<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'c-form',
  props: {
    labelWidth: {
      type: [Number, String],
      default: null
    },
    labelAlign: {
      type: [String],
      default: null
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.c-form {

}
</style>
