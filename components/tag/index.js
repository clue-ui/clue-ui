import CTag from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CTag.install = function (Vue) {
  registerComponent(Vue, CTag.name, CTag)
}

export default CTag
