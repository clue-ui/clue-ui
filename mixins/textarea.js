import style from './lib/style'

export default {
  mixins: [style],
  props: {
    value: {
      type: [String, Number],
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
    // 规定当提交表单时，文本区域中的文本应该怎样换行。可选值 hard|soft
    wrap: {
      type: [String],
      default: null
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
