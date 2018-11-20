const mixin = {
  props: {
    disabled: {
      type: [Boolean],
      default: false
    },
    // 规定是否使用输入字段的自动完成功能 on/off, 默认关闭
    autocomplete: {
      type: [Boolean, String],
      default: 'off'
    },
    autofocus: {
      type: [Boolean],
      default: null
    },
    placeholder: {
      type: [String],
      default: null
    },
    readonly: {
      type: [Boolean],
      default: false
    },
    width: {
      type: [Number, String],
      default: null
    }
  }
}

export default mixin
