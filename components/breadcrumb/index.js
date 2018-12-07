import CBreadcrumb from './src'
import CBreadcrumbItem from './src/breadcrumb-item'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CBreadcrumb.install = function(Vue) {
  registerComponent(Vue, CBreadcrumbItem.name, CBreadcrumbItem)
  registerComponent(Vue, CBreadcrumb.name, CBreadcrumb)
}

export default CBreadcrumb
