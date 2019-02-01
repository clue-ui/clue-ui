<template>
  <fieldset class="c-form-item">
    <slot name="label">
      <legend class="c-form-legend" v-if="label">{{ label }}</legend>
    </slot>

    <!--  content -->
    <div class="c-form-item_content">
      <slot></slot>
    </div>
  </fieldset>
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
