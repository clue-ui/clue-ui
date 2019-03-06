<template>
  <div class="clue c-resize" :class="['placement-' + placement]" ref="c-resize">
    <div class="c-resize container">
      <div class="flex-1" v-for="a in 1, 4" :key="a">{{a}}-alskdlks</div>
    </div>

    <div class="c-resize anchor" v-on="{ mousedown: onMousedown }"></div>
  </div>
</template>

<script>
/**
 * todo
 *  不能超过父元素width/height
 */
export default {
  name: 'c-resize',
  props: {
    // 可选值: left/right/top/bottom
    placement: {
      default: 'right'
    }
  },
  data () {
    return {
      resize: false,
      offsetLeft: null,
      offsetTop: null,
      offsetHeight: null,
      offsetWidth: null,
      clientX: null,
      clientY: null
    }
  },
  computed: {
    refResize: function () {
      return this.$refs['c-resize']
    }
  },
  methods: {
    onMousedown (e) {
      this.resize = true

      // 记录下元素坐标信息(原点/宽/高)
      this.clientX = e.clientX
      this.clientY = e.clientY

      this.offsetLeft = parseInt(this.refResize.style.left || 0)
      this.offsetTop = parseInt(this.refResize.style.top || 0)
      this.offsetHeight = this.refResize.offsetHeight
      this.offsetWidth = this.refResize.offsetWidth

      console.log('>>>:', this.$refs, e)

      // register onmousemove
      document.onmousemove = (e) => {
        this.onMousemove(e)
      }

      // register onmouseup
      document.onmouseup = (e) => {
        console.log('onmouseup', e)
        document.onmousemove = null
        document.onmouseup = null
        this.resize = false
        this.clientX = null
        this.clientY = null
      }
    },

    /**
     * [onMousemove description]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    onMousemove (e) {
      let offsetX = e.clientX - this.clientX
      let offsetY = e.clientY - this.clientY

      let width = this.offsetWidth + offsetX
      let height = this.offsetHeight + offsetY

      console.log('resize: ', this.offsetLeft, offsetX)
      if (this.placement === 'left') {
        this.refResize.style.left = (this.offsetLeft + offsetX) + 'px'
        this.refResize.style.width = (this.offsetWidth - offsetX) + 'px'
      }

      if (this.placement === 'right') {
        this.refResize.style.width = width + 'px'
      }

      if (this.placement === 'top') {
        this.refResize.style.top = (this.offsetTop + offsetY) + 'px'
        this.refResize.style.height = (this.offsetHeight - offsetY) + 'px'
      }

      if (this.placement === 'bottom') {
        this.refResize.style.height = height + 'px'
      }
    }
  }
}
</script>
