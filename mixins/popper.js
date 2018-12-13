import Popper from '../utils/popper.js'

export default {
  data () {
    return {
      popperVisual: true,
      popperInstance: null
    }
  },
  watch: {
    popperVisual: function (val) {
      if (val && this.popperInstance) {
        this.popperInstance.update()
      }
    }
  },
  mounted () {
    var reference = document.querySelector('.my-button')
    var popper = document.querySelector('.popper')

    this.popperInstance = new Popper(reference, popper, {
      placement: "bottom-start",
      positionFixed: true,
      onCreate: (data) => {
        console.debug('[onCreate]:', data)
      },
      onUpdate: (data) => {
        console.debug('[onUpdate]:', data)
      }
    })
  },
  methods: {
    popperShow () {
      // todo
    },
    popperHidden () {
      //
    }
  }
}
