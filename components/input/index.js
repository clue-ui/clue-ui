import CInput from './src';
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CInput.install = function(Vue) {
  registerComponent(Vue, CInput.name, CInput)
}

export default CInput
