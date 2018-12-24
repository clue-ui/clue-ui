<template>
  <button class="c-btn"
    :class="{
      'primary' : type === 'primary',
      'info' : type === 'info',
      'success' : type === 'success',
      'warning' : type === 'warning',
      'danger' : type === 'danger'
    }"
    v-on:click="handleClick"
    :style="styleObject">
    <i class="c-btn-icon" :class="icon" aria-hidden="true" v-if="$props.icon"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  name: 'c-button',
  methods: {
    // todo
  }
}
</script>
