
export default {
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
    maxlength: {
      type: [Number],
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
  }
}
