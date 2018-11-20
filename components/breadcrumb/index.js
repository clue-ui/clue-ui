import CBreadcrumb from './src';
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CBreadcrumb.install = function(Vue) {
  registerComponent(Vue, CBreadcrumb.name, CBreadcrumb)
}

export default CBreadcrumb
