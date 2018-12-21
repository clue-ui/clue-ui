<template>
  <div class="c-lane" @dragleave.self="ondragleave">
    <template v-for="(a, idx) in localValue">
      <div class="c-lane-item teal" draggable="true" :key="idx"
         @dragstart="ondragstart($event, idx)">
        <span>{{idx}} - alsdklaksdl</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'c-lane',
  props: {
    value: {
      type: [Array],
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      localValue: this.value,
      drag: null
    }
  },
  watch: {
    localValue: function (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    ondragstart (e, idx) {
      this.drag = idx
      // this.localValue.splice(idx, 0)
    },
    ondragleave (e) {
      // const remote = this.localValue.splice(this.drag, 1)
      // this.$emit('remove', remote)
      console.log("[ondragleave]: 当被鼠标拖动的对象离开其容器范围内时触发此事件", this.drag ,e)

      // 离开后还可能回来
    }
  }
}
</script>
