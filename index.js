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
import CTabs from './components/tabs'
import CTextarea from './components/textarea'
import CTree from './components/tree'
import CUpload from './components/upload'
import CPagination from './components/pagination'
import CSection from './components/section'
// 扩展组件需单独引入
// import CResize from './components/resize'
// import CWysiwygQuill from './components/wysiwyg-quill'

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
  CInput,
  CTag,
  CUpload,
  CTabs,
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
