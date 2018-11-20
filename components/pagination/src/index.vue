<template>
  <div class="c-pagination">
    <button class="page-item" @click="onPrev">&lt;</button>

    <div class="page-item" v-for="p in posPage, limit" :key="p"
      @click="currentPage = posPage + p"
      :class="{ 'is-active': currentPage === posPage + p }">
      {{ posPage + p }}
    </div>

    <button class="page-item" @click="onNext">&gt;</button>
  </div>
</template>

<script>
export default {
  name: 'c-pagination',
  props: {
    totalRows: {
      type: [Number],
      default: 0
    },
    perPage: {
      type: [Number],
      default: 10
    },
    // 显示分页数量, 最低不能少于5条
    limit: {
      type: [Number],
      default: 10
    }
  },
  computed: {
    totalPage: function () {
      const totalRows = this.totalRows
      const perPage = this.perPage !== 0 ? this.perPage : 10

      return Math.ceil(totalRows / perPage)
    }
  },
  data () {
    return {
      posPage: 0,
      currentPage: 1,
    }
  },
  watch: {
    currentPage: function (p) {
      const limit = this.limit
      const totalPage = this.totalPage
      const offset = (p - this.posPage)

      // 移动的距离
      let d = Math.ceil(limit / 2)

      // 到了最右边
      if (offset === limit) {
        if (this.posPage + limit < totalPage) {
          // (右边边界)重新计算移动位置
          if (totalPage - limit - this.posPage < d) {
            d = totalPage - limit - this.posPage
          }

          this.posPage += d
        }
      }

      //  最左边
      if (offset === 1) {
        if (this.posPage > 0) {
          // (左边边界)重新计算移动位置
          if (this.posPage < d) {
            d = this.posPage
          }

          this.posPage -= d
        }
      }
    }
  },
  methods: {
    /**
     * 上一页
     * @return {[type]} [description]
     */
    onPrev () {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },

    /**
     * 下一页
     * @return {[type]} [description]
     */
    onNext () {
      if (this.currentPage < this.totalPage) {
        this.currentPage++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-pagination {

  @apply flex;
  @apply justify-start;  // 对齐方式 justify-start;justify-center;justify-end;justify-between

  .page-item {
    @apply text-grey;
    @apply border rounded outline-none;
    @apply px-1 text-center select-none;
    @apply cursor-pointer;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;

    +.page-item {
      @apply ml-1;
    }

    &:hover {
      @apply text-grey-darker;
    }

    &:active {
      @apply bg-grey;
    }
  }

  .page-item.is-active {
    @apply bg-teal-dark text-grey-lighter;
  }

  .page-tool {
    @apply ml-2;
    height: 1.5rem;
    line-height: 1.5rem;
  }
}
</style>
