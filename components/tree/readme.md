# tree

在递归中使用slot不能正常分发, 所以使用了3层循环来实现, 最多能支持到三层
```
# 渲染后dom结构
<div>

  <div>{{ tree.name }}</div>

  <ul>
    <li>
      <slot></slot>
    </li>
  </ul>
</div>


```