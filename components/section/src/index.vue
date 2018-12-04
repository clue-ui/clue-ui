<template>
  <section class="c-section">
    <!-- header -->
    <div class="c-section-header" v-if="title || $slots.header">
      <slot name='header'>
        <div class="c-section-title">{{title}}</div>
      </slot>
    </div>

    <!-- body -->
    <div class="c-section-body">
      <slot></slot>
    </div>

    <!-- footer -->
    <div class="c-section-footer" v-if="$slots.footer">
      <slot name='footer'></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'c-section',
  props: {
    title: {
      type: [String],
      default: null
    }
  },
  methods: {
    // todo
  }
}
</script>
