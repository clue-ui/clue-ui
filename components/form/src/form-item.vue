<template>
  <div class="c-form-item">
    <!-- label -->
    <label v-if="label">{{ label }}</label>

    <!--  content -->
    <div class="c-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-form-item',
  props: {
    label: {
      type: [String],
      default: null
    }
  },
  methods: {
    // todo
  }
}
</script>
