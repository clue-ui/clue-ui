<template>
  <div class="c-tag" :class="type">
    <slot></slot>
    <i v-if="closable"
      class="c-tag-close fa fa-close"
      aria-hidden="true"
      @click="onClick"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'c-tag',
  props: {
    type: {
      type: [String],
      default: null,
      validator: function (val) {
        const list = [
          'primary',
          'info',
          'success',
          'warning',
          'danger'
        ]

        return list.indexOf(val) !== -1
      }
    },
    closable: {
      type: [Boolean],
      default: false
    }
  },
  methods: {
    onClick (e) {
      this.$emit('close', e)
    }
  }
}
</script>
