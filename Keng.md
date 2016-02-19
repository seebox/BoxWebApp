# 这里记录开发中遇到的大坑小坑和它们的解决方案

# 官方文档提示的坑
JSX 与 HTML 非常相似，但是有些关键区别要注意。

> 注意:
>
> 关于 DOM 的区别，如行内样式属性 `style`，参考 [DOM 区别](/react/docs/dom-differences.html)

## HTML 实体

HTML 实体可以插入到 JSX 的文本中。

```html
<div>First &middot; Second</div>
```

如果想在 JSX 表达式中显示 HTML 实体，可以会遇到二次转义的问题，因为 React 默认会转义所有字符串，为了防止各种 XSS 攻击。

```html
// 错误: 会显示 “First &middot; Second”
<div>{'First &middot; Second'}</div>
```

有多种绕过的方法。最简单的是直接用 Unicode 字符。这时要确保文件是 UTF-8 编码且网页也指定为 UTF-8 编码。

```javascript
<div>{'First · Second'}</div>
```

安全的做法是先找到 [实体的 Unicode 编号](http://www.fileformat.info/info/unicode/char/b7/index.htm) ，然后在 JavaScript 字符串里使用。

```html
<div>{'First \u00b7 Second'}</div>
<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
```

可以在数组里混合使用字符串和 JSX 元素。

```html
<div>{['First ', <span>&middot;</span>, ' Second']}</div>
```

万不得已，可以直接使用原始 HTML。

```html
<div dangerouslySetInnerHTML={{'{{'}}__html: 'First &middot; Second'}} />
```

## 自定义 HTML 属性

如果往原生 HTML 元素里传入 HTML 规范里不存在的属性，React 不会显示它们。如果需要使用自定义属性，要加 `data-` 前缀。

```html
<div data-custom-attribute="foo" />
```

以 `aria-` 开头的 [网络无障碍] 属性可以正常使用。

```html
<div aria-hidden={true} />
```
***
# 给组件定义style
注意style支持的写法与angular的原生HTML写法不同。
react中的属性都是原生js的数据，style定义多条样式时，**大括号别忘了加上(注意是{{}}，不是{})，还有就是不用加引号,不用加引号,不用加引号**
```html
<div name={'abc'} style={{width: 100, display: 'none'}}></div>
```
***

# ES6定义组件时的坑

> [请参考较为系统的讲解ES6中React的坑，猛戳进入](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)

```javascript
export class Counter extends React.Component {
  //千万别用getInitialState，会报错，ES6直接写构建函数即可，注意调用父类方法！
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    return (...);
  }
}
//定义组件的输入类型数据检查，如果不是公共重用组件的话，可以直接忽略
Counter.propTypes = { initialCount: React.PropTypes.number };
//定义默认输入值，这个比较有用，默认值和初始化是不一样的，切记
Counter.defaultProps = { initialCount: 0 };
```
***
