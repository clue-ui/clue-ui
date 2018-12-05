<template>
  <div class="c-radio">
    <input type="radio"
      ref="radio"
      aria-hidden="true"
      @change="onChange"
    >
    <!-- label -->
    <span class="c-radio-label">
      <slot>{{label}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'c-radio',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: [String, Object],
      default: null
    }
  },
  watch: {
    modelValue: function (val) {
      this.setChecked(val)
    }
  },
  computed: {
    attrValue: function () {
      if (this.isGroup) {
        return this.value
      }

      const attrs = this.$attrs
      return attrs.value ? attrs.value : null
    },
    modelValue: function () {
      return this.isGroup ? this.$parent.value : this.value
    },
    isGroup: function () {
      if (this.$parent && this.$parent.$options._componentTag === 'c-radio-group') {
        return true
      }

      return false
    }
  },
  mounted () {
    this.setChecked(this.modelValue)
  },
  methods: {
    onChange () {
      this.$emit('input', this.attrValue)
      if (this.isGroup) {
        this.$parent.$emit('onChange', this.attrValue)
      }
    },

    /**
     * 设置选中状态
     * @param {[type]} val [当前绑定的值]
     */
    setChecked (val) {
      // 单选状态
      var checked = false

      if (val && val === this.attrValue) {
        checked = true
      }

      this.$refs.radio.checked = checked
    }
  }
}
</script>
