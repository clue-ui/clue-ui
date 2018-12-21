import CLane from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CLane.install = function (Vue) {
  registerComponent(Vue, CLane.name, CLane)
}

export default CLane
