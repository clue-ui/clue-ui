import CTabs from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CTabs.install = function (Vue) {
  registerComponent(Vue, CTabs.name, CTabs)
}

export default CTabs
