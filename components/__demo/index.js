import CButton from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CButton.install = function (Vue) {
  registerComponent(Vue, CButton.name, CButton)
}

export default CButton
