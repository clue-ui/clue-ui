import CTree from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CTree.install = function (Vue) {
  registerComponent(Vue, CTree.name, CTree)
}

export default CTree
