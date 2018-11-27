import base from './base'

export default {
  mixins: [base],
  props: {
    type: {
      type: [String],
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
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}

// export default {
//   mixins: [base],
//   props: {
//     value: {
//       type: [Boolean],
//       default: false
//     },
//   }
// }
