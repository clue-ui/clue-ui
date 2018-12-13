import CPopover from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CPopover.install = function (Vue) {
  registerComponent(Vue, CPopover.name, CPopover)
}

export default CPopover
