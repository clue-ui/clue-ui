import base from './base'

export default {
  mixins: [base],
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
