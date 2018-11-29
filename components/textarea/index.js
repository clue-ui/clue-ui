import Ctextarea from './src';
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
Ctextarea.install = function(Vue) {
  registerComponent(Vue, Ctextarea.name, Ctextarea)
}

export default Ctextarea
