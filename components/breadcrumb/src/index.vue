<template>
  <ol class="c-breadcrumb">
    <span class="c-breadcrumb-label">{{ label }}</span>
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
    label: null
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
  },
  methods: {
    // todo
  }
}
</script>
