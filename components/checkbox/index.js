import CCheckbox from './src';
import CCheckboxGroup from './src/checkbox-group';
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CCheckbox.install = function(Vue) {
  registerComponent(Vue, CCheckboxGroup.name, CCheckboxGroup)
  registerComponent(Vue, CCheckbox.name, CCheckbox)
}

export default CCheckbox
