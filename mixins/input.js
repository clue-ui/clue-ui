// import base from './base'

export default {
  // mixins: [base],
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    type: {
      type: [String],
      default: null
    },
    autofocus: {
      type: [Boolean],
      default: null
    },
    placeholder: {
      type: [String],
      default: null
    },
    autocomplete: {
      type: [Boolean],
      default: false
    },
    readonly: {
      type: [Boolean],
      default: false
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