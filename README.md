

## 在git项目中添加子项目, 推荐使用https方式, 为了能够保持更新, 请不要修改clue-ui中的文件
  git submodule add https://github.com/clue-ui/clue-ui.git src/clue-ui

## 在项目中引入 clue-ui
```
import './path/clue-ui/style.scss'

import ClueUI from './path/clue-ui'
Vue.use(ClueUI)
```
