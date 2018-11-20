<template>
  <textarea class="c-textarea w-full"
    :style="{
      'width': width + 'px'
    }"
    rows="3">
  </textarea>
</template>

<script>
import textareaMixin from '../../../mixins/textarea'
export default {
  mixins: [textareaMixin],
  name: 'c-textarea',
  props: {},
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.c-textarea {
  @apply border;
}
</style>
