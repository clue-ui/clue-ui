import CResize from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CResize.install = function (Vue) {
  registerComponent(Vue, CResize.name, CResize)
}

export default CResize
