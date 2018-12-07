import CCollapse from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CCollapse.install = function (Vue) {
  registerComponent(Vue, CCollapse.name, CCollapse)
}

export default CCollapse
