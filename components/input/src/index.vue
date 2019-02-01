<template>
  <div class="c-input" :class="{'readonly' : readonly }">
    <input
      class="c-input__inner"
      :value="localValue"
      @input="onInput"
      :type="type"
      :maxlength="maxlength"
      :autofocus="autofocus ? 'autofocus' : null"
      :autocomplete="autocomplete ? 'on' : 'off'"
      :readonly="readonly ? 'readonly' : null"
      :placeholder="placeholder">

      <!-- suffix -->
      <slot name="suffix">
        <!-- todo -->
      </slot>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'c-input',
  mixins: [mixin],
  computed: {
    localValue: function () {
      return this.value || ''
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>