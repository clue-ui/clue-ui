<template>
  <div class="c-popover">
    <span @click.stop="popperVisual = !popperVisual">
      <slot name="reference"></slot>
    </span>

    <div ref="popper" role="popper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import popperMixin from '../../../mixins/popper.js'

import $event from '../../../utils/event.js'
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

    // add document.click event
    // 这里有个问题: 多个实例化组建会响应多次
    $event.add(document, 'click', this.autoHide)
  },
  destroyed () {
    $event.remove(document, 'click', this.autoHide)
  },
  methods: {
    /**
     * [autoHide description]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    autoHide (e) {
      if (this.$el.contains(e.target) === false) {
        this.popperVisual = false
      }
    }
  }
}
</script>
