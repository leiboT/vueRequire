## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `sf-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="sf-icon-edit"></i>
<i class="sf-icon-share"></i>
<i class="sf-icon-delete"></i>
<sf-button type="primary" icon="sf-icon-search">搜索</sf-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'sf-icon-' + name"></i>
      <span class="icon-name">{{'sf-icon-' + name}}</span>
    </span>
  </li>
</ul>
