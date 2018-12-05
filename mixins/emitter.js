/**
 * @description [description]
 * @author [author]
 * @since [version]
 * @copyright [description]
 */

export default {
  methods: {
    /**
     * 向上分发事件
     * @param  {[type]} component [description]
     * @param  {[type]} event     [description]
     * @param  {[type]} params    [description]
     * @return {[type]}           [description]
     */
    dispatch (component, event, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.component

      while (parent && (!name || name !== component)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.component
        }
      }

      if (parent) {
        parent.$emit(event, params);
      }
    }
  }
}
