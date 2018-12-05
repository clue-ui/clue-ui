<template>
  <div class="c-form">
    <slot></slot>
  </div>
</template>

<script>
import btnMixin from '../../../mixins/btn'
export default {
  mixins: [btnMixin],
  name: 'c-form',
  methods: {
    // todo
  }
}
</script>
