<template>
  <li class="c-breadcrumb-item">
    <!-- show link -->
    <router-link :to="to" v-if="to">
      <slot></slot>
    </router-link>

    <!-- show text -->
    <span role="link" v-else>
      <slot></slot>
    </span>
  </li>
</template>

<script>
export default {
  name: 'c-breadcrumb-item',
  props: {
    to: {
      type: [String, Object],
      default: null
    }
  }
}
</script>
