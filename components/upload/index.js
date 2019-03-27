import CUpload from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CUpload.install = function (Vue) {
  registerComponent(Vue, CUpload.name, CUpload)
}

export default CUpload
