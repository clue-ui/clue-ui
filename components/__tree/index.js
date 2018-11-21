import CTree from './src';
import { registerComponent } from '../../utils/plugins'

CTree.install = function (Vue) {
  registerComponent(Vue, CTree.name, CTree)
}

export default CTree
