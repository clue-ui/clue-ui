<template>
  <div class="c-input" :class="{'readonly' : readonly }">
    <input
      class="c-input__inner"
      type="text"
      :type="type"
      :autofocus="autofocus ? 'autofocus' : null"
      :autocomplete="autocomplete ? 'on' : null"
      :readonly="readonly ? 'readonly' : null"
      :style="styleObject"
      :placeholder="placeholder">
  </div>
</template>

<script>
import inputMixin from '../../../mixins/input'
export default {
  name: 'c-input',
  mixins: [inputMixin],
  data () {
    return {}
  }
}
</script>