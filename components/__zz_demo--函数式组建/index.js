// import

export default {
  functional: true,

  props: {
    title: '',
    variant: {
      default: 'blue-dark'
    }
  },

  render: function (h, { props, data, slots }) {

    const $slots = slots()

    const tag = 'ol'

    const span = h('h3', `Title-${props.title}`)

    const componentData = {
      class: [
        `text-${props.variant}`,
        'font-bold'
      ],
      style: {
        fontSize: '14px'
      },
      props: props
    }

    const children = []
    for (var i = 0 i <5 i++) {
      children.push(h('li', 'li-item-' + i))
    }

    // footer
    let footer = h(false)
    if ($slots.footer) {
      footer = h('div', {
        class: [
          'border-t p-1'
        ]
      }, $slots.footer)
    }

    return h(tag, componentData, [span, ...children, footer])
  }
}