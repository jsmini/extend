# 文档
将对象属性递归放到目标对象，类似jQuery的`$.extend`

## assign
等同于系统函数Object.assign，将源对象属性进行浅拷贝，合并到目标对象

如果存在`Object.assign`，assign会使用`Object.assign`，否则自己实现逻辑

函数参数和返回值（要遵守下面的例子的规则）

- param {object} target 目标对象
- param {object} [...source] 源原对象
- return {object} target对象

举个例子（要包含代码用例）

```js
assign({}, {a: 1}, {a: 2, b: 1}) // {a: 2, b: 1}
```

## extend
将源对象属性进行浅拷贝或深拷贝，合并到目标对象，类似jQuery的`$.extend`

函数参数和返回值（要遵守下面的例子的规则）

- param {boolean} deep 是否进行递归赋值，如果为false或不传都为浅赋值，传true为深度递归赋值
- param {object} target 目标对象
- param {object} [...source] 源原对象
- return {object} target对象

举个例子（要包含代码用例）

```js
// 浅赋值
extend({}, {a: 1}, {a: 2, b: 1}) // {a: 2, b: 1}
extend(false, {}, {a: 1}, {a: 2, b: 1}) // {a: 2, b: 1}

// 深度递归赋值
extend(true, {}, {a: 1}, {a: 2, b: 1}) // {a: 2, b: 1}
```
