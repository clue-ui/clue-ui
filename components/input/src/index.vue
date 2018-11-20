<template>
  <div class="c-input" :style="{ 'width': width + 'px' }">

    <!-- prepend -->
    <div class="c-input-prepend" v-if="$slots.prepend">
      <slot name="prepend">
        <i class="fa fa-bicycle" aria-hidden="true"></i>
      </slot>
    </div>

    <!-- input -->
    <input class="" id="username" type="text" :autocomplete="autocomplete" :placeholder="placeholder">

    <!-- append -->
    <slot name="append">
      <!-- <i class="fa fa-bicycle" aria-hidden="true"></i> -->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'c-input',
  props: {
    width: {
      type: [Number],
      default: 360
    },
    autocomplete: {
      type: [String],
      default: 'off'
    },
    placeholder: {
      type: [String],
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.c-input {
  @apply inline-flex;
  @apply border rounded p-1;

  .c-input-prepend {

  }

  > input {
    @apply outline-none flex-1;

    :focus {
      @apply border-grey;
    }
  }
}
</style>
