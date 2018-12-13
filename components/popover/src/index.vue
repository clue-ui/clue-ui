<template>
  <div>
    <c-button class="my-button block" type="primary">button</c-button>

    <div class="popper" role="popper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import popperMixin from '../../../mixins/popper.js'
export default {
  mixins: [popperMixin],
  name: 'c-popover',
  methods: {
    // todo
  }
}
</script>
