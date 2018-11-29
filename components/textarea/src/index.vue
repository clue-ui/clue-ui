<template>
  <textarea
    class="c-textarea"
    :value="localValue"
    :autofocus="autofocus ? 'autofocus' : null"
    :readonly="readonly ? 'readonly' : null"
    :wrap="wrap"
    rows=4
    cols=30
    :style="styleObject"
    :placeholder="placeholder">
  </textarea>
</template>

<script>
import textareaMixin from '../../../mixins/textarea'
export default {
  mixins: [textareaMixin],
  name: 'c-textarea',
  computed: {
    localValue: function () {
      return this.value || ''
    }
  },
  methods: {
    // todo
  }
}
</script>
