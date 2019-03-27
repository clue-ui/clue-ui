<template>
  <div class="c-wysiwyg-quill">
    <!--
      toobar 自定义工具可以使用 sticky 模式, 期待更完美的解决方案。
      使用效果参考 https://tailwindcss.com/docs/positioning sticky 章节
    -->
    <div ref="quill-toolbar" class="quill-toolbar" :class="{'quill-sticky': sticky}">
      <slot name="toolbar"></slot>
    </div>

    <!-- editor container -->
    <div ref="editor-container" class="editor-container"></div>

    <!-- test utils -->
    <!-- <div class="mt-4">
      <c-button type="info" @click="getContents">getContent</c-button>
      <c-button type="info" @click="getFormat">getFormat</c-button>
      <c-button type="info" @click="toHtml">toHtml</c-button>
    </div> -->
  </div>
</template>

<script>
import Quill from 'quill'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: 'c-wysiwyg-quill',
  props: {
    toolbarOptions: {
      type: [Array],
      default: function () {
        return [
          { 'header': [2, 3, 4, 5, false] },
          'bold',
          'link',
          'blockquote',
          { 'list': 'ordered'},
          { 'list': 'bullet' },
          'image',
          'code-block'
        ]
      }
    },
    placeholder: {
      type: [String],
      default: 'enter somethon ...'
    },
    // 'core', 'snow', 'bubble'
    theme: {
      type: [String],
      default: 'snow'
    },
    readOnly: {
      type: [Boolean],
      default: false
    },
    sticky: {
      type: [Boolean],
      default: true
    },
    // 'error', 'warn', 'log', 'info' 或者 false
    debug: {
      type: [String, Boolean],
      default: false
    }
  },
  data () {
    return {
      quill: null
    }
  },
  computed: {
    refToolbar: function () {
      return this.$refs['quill-toolbar']
    },
    options: function () {
      return {
        debug: this.debug,

        // modules
        modules: {
          // syntax: true,
          toolbar: this.$slots.toolbar ? this.refToolbar : this.toolbarOptions
        },
        placeholder: this.placeholder,
        readOnly: this.readOnly,
        theme: 'snow'
      }
    }
  },
  mounted () {
    let el = this.$refs['editor-container']

    // new quill
    this.quill = new Quill(el,  this.options)

    // events
    this.quill.on('text-change', (event, ...args) => {
      console.log('text-change:', event, args)
      // if (event === 'text-change') {
      //   console.log('editor-change:', event, args)
      // }
    })

    // 设置内容, 文本格式
    this.quill.setText('Hello World!\n')

    // 设置内容 Delta 格式
    // let content = [
    //   { insert: 'Hello ' },
    //   { insert: 'World!', attributes: { bold: true } },
    //   { insert: '\n' }
    // ]
    // this.quill.setContents(content)
  },
  methods: {
    onFocus () {
      this.$emit('focus')
    },

    onBlur () {
      this.$emit('blur')
    },

    /**
     * Overwrites editor with given contents. Contents should end with
     * a newline.
     *
     * Returns a Delta representing the change. This will be the same as
     * the Delta passed in, if given Delta had no invalid operations.
     *
     * Source may be "user", "api", or "silent". Calls where the source
     * is "user" when the editor is disabled are ignored.
     *
     * @param {[type]} content [description]
     * @param {[type]} type    [description]
     */
    setContents (content, type) {
      if (this.quill) {
        if (type === 'delta') {
          this.quill.setContents(content)   // Delta 格式
        } else {
          this.quill.setText(content)       // 文本格式
        }
      }
    },
    /**
     * 获取当前内容
     * @return {[type]} [description]
     */
    getContents () {
      if (this.quill) {
        const content = this.quill.getContents()
        console.log("[wysiwyg-quill]: ", content)
      }
    },
    /**
     * 获取当前游标内容格式
     * @return {[type]} [description]
     */
    getFormat () {
      if (this.quill) {
        const content = this.quill.getFormat()
        console.log("[wysiwyg-quill]: ", content)
      }
    },
    toHtml () {
      if (this.quill) {
        const html = this.quill.root.innerHTML
        const text = this.quill.root.innerText
        console.log("[wysiwyg-quill]: ", html)
        console.log("[wysiwyg-quill]: ", text)
      }
    }
  }
}
</script>

<!-- 编辑器需要单独引入, 避免再引入样式, style 直接写在组件内部 -->
<style lang="scss" scoped>
.c-wysiwyg-quill {

  .editor-container {
    height: 200px;
    -webkit-overflow-scrolling: touch;
  }

  .quill-toolbar {
    // todo
  }

  .quill-sticky {
    @apply sticky pin-t;
    @apply z-10;
    @apply bg-white;
  }
}
</style>
