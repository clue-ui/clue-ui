import CSection from './src';
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CSection.install = function(Vue) {
  registerComponent(Vue, CSection.name, CSection)
}

export default CSection
