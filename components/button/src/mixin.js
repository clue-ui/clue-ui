// import base from './base'

export default {
  // mixins: [base],
  props: {
    type: {
      type: [String],
      default: null
      // validator:
    },
    icon: {
      type: [String],
      default: null
    }
  },
  computed: {
    styleObject: function () {
      let style = {}

      // return styleObject
      return style
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
