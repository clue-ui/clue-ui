<template>
  <div class="c-popover">
    <span @click="popperVisual = !popperVisual">
      <slot name="reference"></slot>
    </span>

    <div ref="popper" role="popper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import popperMixin from '../../../mixins/popper.js'
export default {
  mixins: [popperMixin],
  name: 'c-popover',
  data () {
    return {
      popperVisual: null,
    }
  },
  watch: {
    popperVisual: function (val) {
      if (val) {
        this.popperShow()
      } else {
        this.popperHidden()
      }
    }
  },
  mounted () {
    this.popperVisual = false
  }
}
</script>
