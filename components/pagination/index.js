import Cpagination from './src';
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
Cpagination.install = function(Vue) {
  registerComponent(Vue, Cpagination.name, Cpagination)
}

export default Cpagination
