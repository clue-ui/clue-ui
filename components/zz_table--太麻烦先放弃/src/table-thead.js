// table
import tableColumn from './table-column'

export default {
  functional: true,

  props: {
    caption: '',
    name: ''
  },

  render: function (h, { props, data, children }) {
    const tag = 'thead'

    console.debug('[c-table-thead]:', { 'props': props, 'data': data, 'children': children})

    let $children = children.map((v) => {
      const attrs = v.data.attrs

      return h(tableColumn, {
        props: {
          label: attrs.label || ''
        }
      })
    })
    //

    const tr = h('tr', $children)

    return h(tag, [tr])
  }
}