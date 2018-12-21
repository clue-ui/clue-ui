<template>
  <div class="c-collapse">
    <!-- header -->
    <div class="c-collapse-header" @click="isFold = !isFold" v-if="title || $slots.header">
      <slot name='header'>
        <i class="fa" :class="classObject" aria-hidden="true"></i>
        <span class="c-collapse-title">{{title}}</span>
      </slot>
    </div>

    <!-- body -->
    <div class="c-collapse-body" v-show="isFold">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-collapse',
  props: {
    title: {
      type: [String],
      default: null
    }
  },
  data () {
    return {
      isFold: true
    }
  },
  computed: {
    classObject: function () {
      return {
        'fa-angle-right' : !this.isFold,
        'fa-angle-down' : this.isFold
      }
    }
  },
  methods: {
    // todo
  }
}
</script>
