import CWysiwygQuill from './src'
import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CWysiwygQuill.install = function (Vue) {
  registerComponent(Vue, CWysiwygQuill.name, CWysiwygQuill)
}

export default CWysiwygQuill
