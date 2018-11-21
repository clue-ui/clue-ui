<template>
  <div>
    <!-- title -->
    <slot name="before"></slot>

    <!-- menus -->
    <ul v-if="model.children">
      <li v-for="(m1, idx1) in model.children" class="tree-node lv1" :key="idx1">
        <slot v-bind="m1" class="tree-node"></slot>

        <!-- children -->
        <ul v-if="m1.children">
          <li v-for="(m2, idx2) in m1.children" class="tree-node lv2" :key="idx2">
            <slot v-bind="m2"></slot>

            <!-- children -->
            <ul v-if="m2.children">
              <li v-for="(m3, idx3) in m2.children" class="tree-node lv3" :key="idx3">
                <slot v-bind="m3"></slot>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'c-tree',
  props: {
    model: [Object],
    children: {
      type: [String],
      default: 'children'
    }
  }
}
</script>
