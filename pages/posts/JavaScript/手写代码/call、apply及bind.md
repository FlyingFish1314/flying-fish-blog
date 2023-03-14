---
title: call、apply、bind函数
date: 2023-03-14
cover: https://fastly.jsdelivr.net/gh/YunYouJun/cdn/img/bg/astronaut.webp
categories:
  - JavaScript
  - 手写代码
tags:
  - JavaScript
  - call
  - bind
  - apply
---

### 0.思考
+ 三者有何区别？
+ 不传如第一个参数，如何让上下文默认为window
+ 改变了this指向，让新对象可以执行该函数，并能接受参数

## 1.`call`函数
### 1.1相关描述
>call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
---

>备注： 该方法的语法和作用与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。

+ 理解：借鸡生蛋
### 1.2代码实现
**代码**
```JavaScript
Function.prototype.myCall = function(context){
  if(typeof this !== 'function'){
    // 不是函数不要瞎掺和
    throw new TypeError('Error')
  }
  // 不说this指向谁的话可就指向window全局了，
  context = context || window
  // 这里就相当于改变了this指向，相当与把你(this)的方法拿过来我（context）用用
  context.fn = this
  // 第一个参数是要将this该变给谁，后面的是参数
  const args = [...arguments].slice(1)
  const result  = context.fn(...args)
  // 方法用完了，我要清理一下，毕竟本来就不是我（context）的
  delete context.fn
  return result
}
```
**分析**
+ 首先context为可选参数，如果不传的话，默认上下文为`window`
+ 接下来给`context`属性创建一个`fn`属性，并将值设置为需要调用的函数
+ 因为call可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
+ 然后调用函数并将对象上的和函数删除

## 2.`call`函数介绍与实现
### 2.1相关描述
>apply() 方法调用一个具有给定 this 值的函数，以及以一个数组（或一个类数组对象）的形式提供的参数。

+ 和call极度相似，仅仅处理参数不同
### 2.2代码实现
```JavaScript
Function.prototype.myApply = function(context){
  if(typeof this !== 'function'){
    // 不是函数不要瞎掺和
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this

  // 处理参数，和call的区别
  let result
  if(arguments[1]){
    result = context.fn(...arguments[1])
  }else{
    result = context.fn()
  }

  delete context.fn
  return result
}
```

## 3.`bind`函数

### 3.1相关描述
>bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

### 3.2代码实现
**代码**
```JavaScript
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

```
**分析**
● 前几步和之前的实现差不多
● bind 返回了一个函数，对于函数来说有两种方式调用，一种是直接调用，一种是通过 new 的方式，我们先来说直接调用的方式
● 对于直接调用来说，这里选择了 apply 的方式实现，但是对于参数需要注意以下情况：因为 bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，所以我们需要将两边的参数拼接起来，于是就有了这样的实现 args.concat(...arguments)
● 最后来说通过 new 的方式，在之前的章节中我们学习过如何判断 this，对于 new 的情况来说，不会被任何方式改变 this，所以对于这种情况我们需要忽略传入的 this

+ 我有一个函数想要你来执行(个人理解)


