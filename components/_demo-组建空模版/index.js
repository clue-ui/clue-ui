import CForm from './src';
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CForm.install = function(Vue) {
  registerComponent(Vue, CForm.name, CForm)
}

export default CForm
