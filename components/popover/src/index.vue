<template>
  <div class="c-popover">
    <!-- <span @click="popperVisual = !popperVisual" @blur.native.capture="onBlur">232 -->
    <!-- <c-button @blur="onBlur" @focus="onFocus" type="primary">lsdkakdlaksdlk</c-button> -->
    <span @click.stop="popperVisual = !popperVisual" @blur="onBlur">232
      <!-- <slot name="reference"></slot> -->
      <c-button type="primary">lsdkakdlaksdlk</c-button>
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

    var _this = this
    document.onclick = function (e) {
      console.debug('>>>>>>>>>>', e, _this)
      _this.popperVisual = false
    }
  },
  // destroyed () {
  //   document.removeEventListener('click', this.autoHide);
  // },
  methods: {
    autoHide (e) {
      console.log('======', e)
    },
    onBlur () {
      console.debug('>>>>>>>>>>>>>:::blur')
    },
    onFocus () {
      console.debug('>>>>>>>>>>>>>:::focus')
    }
  }
}
</script>
