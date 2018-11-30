import Csection from './src';
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
Csection.install = function(Vue) {
  registerComponent(Vue, Csection.name, Csection)
}

export default Csection
