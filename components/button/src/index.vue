<template>
  <button class="c-btn" @click="handleClick" :style="styleObject">
    <slot></slot>
  </button>
</template>

<script>
import btnMixin from '../../../mixins/btn'
export default {
  mixins: [btnMixin],
  name: 'c-button',
  methods: {
    // todo
  }
}
</script>
