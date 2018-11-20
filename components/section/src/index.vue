<template>
  <section class="border shadow">

    <!-- header -->
    <div class="border-b" :class="[`bg-${variant}`]" v-if="title || $slots.header">
      <slot name='header'>
        <div class="p-2 font-bold">{{title}}</div>
      </slot>
    </div>

    <!-- body -->
    <div class="c-card-body p-2" :class="{
      'flex justify-center' : align === 'center',
      'flex justify-end' : align === 'right'
      }">
      <slot></slot>
    </div>

    <!-- footer -->
    <div class="c-card-footer border-t p-2" v-if="$slots.footer">
      <slot name='footer'></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'c-section',
  props: {
    title: null,
    variant: {
      default: 'grey-lighter'
    },
    align: {
      default: 'left'
    }
  },
  data () {
    return {
      // todo: '....'
    }
  }
}
</script>
