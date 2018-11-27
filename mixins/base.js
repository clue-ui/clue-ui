/**
 * 元素基本属性
 * @type {Object}
 */
const mixin = {
  props: {
    // disabled: {
    //   type: [Boolean],
    //   default: false
    // },
    autofocus: {
      type: [Boolean],
      default: null
    },
    width: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    styleObject: function () {
      let style = {}

      if (this.width) {
        style.width = parseInt(this.width) + 'px'
      }

      return style
    }
  }
}

export default mixin
