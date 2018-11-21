/**
 * 可输入元素属性
 * @type {Object}
 */

import base from 'base'

export default {
  mixins: [base],
  props: {
    value: {
      type: [Boolean],
      default: false
    },
    // 规定是否使用输入字段的自动完成功能 on/off, 默认关闭
    autocomplete: {
      type: [Boolean, String],
      default: 'off'
    },
    placeholder: {
      type: [String],
      default: null
    },
    readonly: {
      type: [Boolean],
      default: false
    },
  }
}
