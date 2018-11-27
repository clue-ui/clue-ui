import base from './base'

export default {
  mixins: [base],
  props: {
    type: {
      type: [String],
      default: null
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
