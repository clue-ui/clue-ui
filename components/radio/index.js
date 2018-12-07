import CRadio from './src'
import CRadioGroup from './src/radio-group'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CRadio.install = function(Vue) {
  registerComponent(Vue, CRadioGroup.name, CRadioGroup)
  registerComponent(Vue, CRadio.name, CRadio)
}

export default CRadio
