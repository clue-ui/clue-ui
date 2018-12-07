import CForm from './src'
import CFormItem from './src/form-item'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CForm.install = function (Vue) {
  registerComponent(Vue, CFormItem.name, CFormItem)
  registerComponent(Vue, CForm.name, CForm)
}

export default CForm
