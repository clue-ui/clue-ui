import Popper from '../utils/popper.js'

/**
 * popper.js
 * @author x9ec4
 * 参考 https://github.com/FezVrasta/popper.js
 */
export default {
  props: {
    /**
     * [placement description]
     * @type {Object}
     *        auto      -start
     *        top       -end
     *        right
     *        bottom
     *        left
     */
    placement: {
      type: [String],
      default: 'bottom'
    }
  },
  data () {
    return {
      popperInstance: null,
      $popperEl: null
    }
  },
  mounted () {
    this.$popperEl = this.$refs['popper']

    this.popperInstance = new Popper(this.$el, this.$popperEl, {
      placement: this.placement
      // positionFixed: true,
      // onCreate: (data) => {
      //   console.debug('[onCreate]:', data)
      // },
      // onUpdate: (data) => {
      //   console.debug('[onUpdate]:', data)
      // }
    })
  },
  methods: {
    popperShow () {
      if (this.$popperEl && this.popperInstance) {
        this.$popperEl.style.display = null;
        this.popperInstance.update()
      }
    },
    popperHidden () {
      if (this.$popperEl) {
        this.$popperEl.style.display = "none";
      }
    }
  },
  destroy () {
    if (this.popperInstance) {
      this.popperInstance.destroy()
    }
  }
}
