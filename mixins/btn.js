import base from './base'

export default {
  mixins: [base],
  props: {
    type: {
      type: [String],
      default: null
      // validator:
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
