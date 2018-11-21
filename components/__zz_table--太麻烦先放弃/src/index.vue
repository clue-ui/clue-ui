<template>
  <table class="c-table w-full">
    <thead>
      <c-table-column v-for="(v, idx) in $slots.default">
        <span v-if="v.data.attr">{{ v.data.attrs.label || '' }}</span>
      </c-table-column>
    </thead>

    <tbody>
      <slot></slot>
    </tbody>

    <tfoot></tfoot>
  </table>
</template>

<script>
import CTableColumn from './table-column'
export default {
  name: 'c-table',
  components: {
    CTableColumn
  },
  props: {
    caption: ''
  },
  data () {
    return {
      // menus: []
    }
  },
  mounted () {
    console.debug("[table]:", this.$slots.default)
  }
}
</script>

<style lang="scss" scoped="">
.c-table {

}
</style>
