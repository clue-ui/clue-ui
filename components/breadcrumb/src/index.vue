<template>
  <ol class="c-breadcrumb list-reset p-2 shadow border">
    <span class="pr-2">{{ label }}</span>
    <li v-for="(v, idx) in items" :key="idx" class="breadcrumb-item">
      <router-link :to="v.path" v-if="v.path">{{ v.label }}</router-link>
      <span v-else>{{ v.label }}</span>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'c-breadcrumb',
  props: {
    label: ''
  },
  data () {
    return {
      items: [
        {
          label: 'xxxx',
          path: '/demo/p1'
        }, {
          label: 'bbbb',
          path: '/demo/p2'
        }, {
          label: 'ccccc'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.c-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.breadcrumb-item {
  + .breadcrumb-item {

    &::before {
      display: inline-block;
      content: '/';
      @apply px-1;
    }
  }

  + .breadcrumb-item:hover::before {
    text-decoration: underline;
  }

  + .breadcrumb-item:hover::before {
    text-decoration: none;
  }

  &.active {
    color: blue;
  }

  a {
    @apply no-underline;
  }
}

</style>
