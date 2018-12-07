import CPagination from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CPagination.install = function (Vue) {
  registerComponent(Vue, CPagination.name, CPagination)
}

export default CPagination
