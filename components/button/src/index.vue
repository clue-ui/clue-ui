<template>
  <button class="c-btn"
    :class="{
      'c-btn-primary' : type === 'primary',
      'c-btn-info' : type === 'info',
      'c-btn-success' : type === 'success',
      'c-btn-warning' : type === 'warning',
      'c-btn-danger' : type === 'danger'
    }"
    @click="handleClick"
    :style="styleObject">
    <i class="c-btn-icon fa fa-search" v-if="$props.icon"></i>
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
