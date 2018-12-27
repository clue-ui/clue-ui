<template>
  <div class="c-form-item">
    <label style="width: 100px; text-align: right; padding-right: 15px;">{{ label }}</label>
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
