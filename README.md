
## 推荐使用vue-cli3脚手架

### 安装依赖包
```
yarn add node-sass sass-loader
yarn add tailwindcss --dev
```

### 在.postcssrc中引入tailwindcss配置文件
```
var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('src/clue-ui/assets/tailwind.js'),
    require('autoprefixer')
  ]
}
```

### 在git项目中添加子项目, 推荐使用https方式, 为了能够保持更新, 请不要修改clue-ui中的文件
```
# 在项目中添加新的子模块
git submodule add https://github.com/clue-ui/clue-ui.git src/clue-ui

# 更新子模块
git submodule update --init --recursive
```

### 在项目中引入 clue-ui
```
import './path/clue-ui/style.scss'

import ClueUI from './path/clue-ui'
Vue.use(ClueUI)
```

### 开发工具工具
```
# 开发工具
clue-ui/bin/make

make xxxx          新建组建
make xxxx          构建组建
make xxxx          发布
```