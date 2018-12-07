import CTextarea from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CTextarea.install = function (Vue) {
  registerComponent(Vue, CTextarea.name, CTextarea)
}

export default CTextarea
