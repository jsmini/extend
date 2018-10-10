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
将源对象属性进行浅拷贝，合并到目标对象，类似jQuery的`$.extend(false)`

其实际为assign的别名

## extendDeep
将源对象属性进行深拷贝，合并到目标对象，类似jQuery的`$.extend(true)`

函数参数和返回值（要遵守下面的例子的规则）

- param {object} target 目标对象
- param {object} [...source] 源原对象
- return {object} target对象

举个例子（要包含代码用例）

```js
extendDeep({}, {a: 1}, {a: 2, b: 1}) // {a: 2, b: 1}
extendDeep(false, {}, {a: 1}, {a: 2, b: 1}) // {a: 2, b: 1}
extendDeep({}, {a: 1}, {a: 2, b: 1}) // {a: 2, b: 1}
```
