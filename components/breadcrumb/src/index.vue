<template>
  <ol class="c-breadcrumb">
    <span class="c-breadcrumb-label">{{ label }}</span>
    <slot>
      <c-breadcrumb-item v-for="(v, idx) in items" :key="idx" :to="v.path">
        {{ v.label }}
      </c-breadcrumb-item>
    </slot>
  </ol>
</template>

<script>
export default {
  name: 'c-breadcrumb',
  props: {
    label: {
      type: [String],
      default: null
    },
    items: {
      type: [Array],
      default: function () {
        return []
      }
    }
  }
}
</script>
