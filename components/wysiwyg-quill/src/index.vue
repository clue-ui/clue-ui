<template>
  <div class="c-wysiwyg-quill">
    <!-- toobar -->
    <div id="editor-toolbar" style="display: none;">
      <!-- Add font size dropdown -->
      <select class="ql-size">
        <option value="small"></option>
        <!-- Note a missing, thus falsy value, is used to reset to default -->
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <!-- Add a bold button -->
      <button class="ql-bold"></button>
      <!-- Add subscript and superscript buttons -->
      <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>
    </div>

    <div ref="editor-container">
      <p>Hello World!</p>
      <p>Some initial <strong>bold</strong> text</p>
      <p><br></p>
    </div>

    <!-- test utils -->
    <div class="mt-4">
      <c-button type="info" @click="getContents">getContent</c-button>
      <c-button type="info" @click="getFormat">getFormat</c-button>
      <c-button type="info" @click="toHtml">toHtml</c-button>
    </div>
  </div>
</template>

<script>
import Quill from 'quill'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: 'c-wysiwyg-quill',
  data () {
    return {
      quill: null
    }
  },
  mounted () {
    let el = this.$refs['editor-container']
    let toolbar = this.$refs['editor-toolbar']

    let options = {
      debug: 'info',
      modules: {
        // toolbar: '#editor-toolbar',
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],                     // 引用和code
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // 有序列表、无序列表
          ['link', 'image'],                                // 连接、图片上传
          ['clean']                                         // 清除格式
        ]
        // handlers: {}
      },
      placeholder: 'Compose an epic...',
      readOnly: false,
      theme: 'snow'
    }

    // new quill
    this.quill = new Quill(el,  options)

    // 设置内容, 文本格式
    // this.quill.setText('Hello World!\n')

    // 设置内容 Delta 格式
    let content = [
      { insert: 'Hello ' },
      { insert: 'World!', attributes: { bold: true } },
      { insert: '\n' }
    ]
    this.quill.setContents(content)
  },
  methods: {
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
