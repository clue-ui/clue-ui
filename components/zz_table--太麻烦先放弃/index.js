import CTable from './src';
import CTableColumn from './src/table-column';

import { registerComponent } from '../../utils/plugins'

/* istanbul ignore next */
CTable.install = function(Vue) {
  registerComponent(Vue, CTable.name, CTable)
  registerComponent(Vue, CTableColumn.name, CTableColumn)
}

export default CTable
