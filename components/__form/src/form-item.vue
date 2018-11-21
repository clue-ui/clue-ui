<template>
  <div class="c-form-item">
    <label class=""

      :class="{
        'text-right': labelAlign === 'right'
      }"

      :style="{'width': labelWidth ? labelWidth + 'px' : 'auto' }">
      {{ label }}
    </label>

    <div class="inline">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-form-item',
  props: {
    label: {
      type: [String],
      default: ''
    }
  },
  data () {
    return {
      labelWidth: null,
      labelAlign: null
    }
  },
  mounted () {
    this.getParentAttrs()
  },
  methods: {
    getParentAttrs () {
      const parent = this.getParent('c-form')
      // console.debug(parent)
      if (parent) {
        if (typeof parent['labelWidth'] !== 'undefined') {
          this.labelWidth = parent['labelWidth']
        }

        if (typeof parent['labelAlign'] !== 'undefined') {
          this.labelAlign = parent['labelAlign']
        }
      }
    },

    // 从父组建中获取属性, mixins
    getParent(componentTag) {
      var parent = this.$parent || this.$root;
      var tag = parent.$options._componentTag

      while (parent && tag !== componentTag) {
        parent = parent.$parent

        if (parent) {
          tag = parent.$options._componentTag
        }
      }

      return parent
    }
  }
}
</script>

<style lang="scss" scoped>
.c-form-item {
  @apply flex items-center my-4;
}
</style>
