<template>
  <div class="c-collapse">
    <!-- header -->
    <div class="c-collapse-header" @click="isFold = !isFold" v-if="title || $slots.header">
      <slot name='header'>
        <div class="c-collapse-title">{{title}}</div>
      </slot>
    </div>

    <!-- body -->
    <div class="c-collapse-body" v-show="!isFold">
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
  methods: {
    // todo
  }
}
</script>
