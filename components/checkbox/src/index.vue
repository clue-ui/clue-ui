<template>
  <div class="c-checkbox">
    <input type="checkbox"
      ref="checkbox"
      aria-hidden="true"
      @change="onChange"
    >

    <!-- label -->
    <span class="c-checkbox-label">
      <slot>{{label}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'c-checkbox',
  props: {
    value: {
      type: [Array, String],
      default: null
    },
    label: {
      type: [String],
      default: null
    }
  },
  computed: {
    isChecked: function () {
      const arr = this.modelValue
      if (arr && arr.indexOf(this.attrValue) === -1) {
        return false
      }

      return true
    },
    attrValue: function () {
      if (this.isGroup) {
        return this.value
      }

      const attrs = this.$attrs
      return attrs.value ? attrs.value : null
    },
    modelValue: function () {
      const v = this.isGroup ? this.$parent.value : this.value

      // return
      return v || []
    },
    isGroup: function () {
      if (this.$parent && this.$parent.$options._componentTag === 'c-checkbox-group') {
        return true
      }

      return false
    }
  },
  watch: {
    isChecked: function (val) {
      this.$refs.checkbox.checked = val
    }
  },
  methods: {
    onChange () {
      var arr = this.modelValue

      const checked = this.$refs.checkbox.checked
      if (checked) {
        arr.push(this.attrValue)
      } else {
        arr.splice(arr.indexOf(this.attrValue), 1)
      }

      this.$emit('input', arr)
      if (this.isGroup) {
        this.$parent.$emit('onChange', arr)
      }
    }
  }
}
</script>
