<template>
  <div class="c-upload">
    <!-- 单文件上传 -->
    <div class="single-upload" v-if="multiple === false">
      <input class="single-name" :value="filelist.length > 0 ? filelist[0].name : ''" disabled="disabled"/>
      <button class="single-upload" @click="onSelectFile">上传图片</button>
    </div>

    <!-- 多文件列表 -->
    <!-- <ul>
      <li v-for="(v, idx) in filelist" :key="idx">
        <div>{{v.name}}</div>
      </li>
    </ul> -->

    <!-- hidden dom -->
    <input ref="ref-upload"
      type="file"
      style="display: none"
      :multiple="multiple ? 'multiple' : null"
      @change="onFileChange"
    />
  </div>
</template>

<script>
export default {
  name: 'c-upload',
  props: {
    multiple: {
      default: false
    }
  },
  data () {
    return {
      filelist: []
    }
  },
  computed: {
    refUpload: function () {
      return this.$refs['ref-upload']
    }
  },
  methods: {
    onSelectFile () {
      this.refUpload.click()
    },
    onFileChange () {
      this.filelist = this.refUpload.files

      // emit upload
      for (var i in this.filelist) {
        if (typeof this.filelist[i] === 'object') {
          this.$emit('change', this.filelist[i])
        }
      }
    }
  }
}
</script>
