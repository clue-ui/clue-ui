/**
 * mixins style
 */
const mixin = {
  props: {
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    styleObject: function () {
      let style = {}

      // if (this.width) {
      //   style.width = per
      // }

      return style
    }
  }
}

export default mixin
