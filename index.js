// import
import CBreadcrumb from './components/breadcrumb'
import CButton from './components/button'
import CCheckbox from './components/checkbox'
import CCollapse from './components/collapse'
import CForm from './components/form'
import CRadio from './components/radio'
import CLane from './components/lane'
import CPopover from './components/popover'
// import CTable from './components/table'
import CInput from './components/input'
import CTag from './components/tag'
import CTextarea from './components/textarea'
import CTree from './components/tree'
import CPagination from './components/pagination'
import CSection from './components/section'

// component list
const components = [
  CBreadcrumb,
  CButton,
  CCheckbox,
  CCollapse,
  CForm,
  CRadio,
  CPopover,
  CLane,
  // CTable,
  CInput,
  CTag,
  CTextarea,
  CTree,
  CPagination,
  CSection
]

// install
const install = function (Vue) {
  components.forEach(c => {
    Vue.use(c)
  })
}

// export
export default {
  'version': '1.0.0',
  install
}
