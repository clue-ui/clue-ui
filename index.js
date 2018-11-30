// import
import CBreadcrumb from './components/breadcrumb'
import CButton from './components/button'
// import CForm from './components/form'
// import CTable from './components/table'
import CInput from './components/input'
import CTextarea from './components/textarea'
import CTree from './components/tree'
import CPagination from './components/pagination'
import CSection from './components/section'

// component list
const components = [
  CBreadcrumb,
  CButton,
  // CForm,
  // CTable,
  CInput,
  CTextarea,
  CTree,
  CPagination,
  CSection
]

// install
const install = function (Vue) {
  components.forEach( c => {
    Vue.use(c)
  })
}

// export
export default {
  'version': '1.0.0',
  install
}
