---
title: Object.create实现
date: 2023-03-13
cover: https://fastly.jsdelivr.net/gh/YunYouJun/cdn/img/bg/astronaut.webp
categories:
  - JavaScript
  - 手写代码
tags:
  - JavaScript
  - 手写
---


[[toc]]



## 1.代码实现
+ 思路：将传入的对象作为原型

**实现：**
```
function create (obj){
  function F(){}
  F.prototype = obj
  return new F()
}

```
**测试：**
```
// 测试
const person = {
  sayName:function(){
    console.log(`My name is ${this.name}.`)
  }
}
// let me = Object.create(person) //My name is tom.
let me = create(person) //My name is tom.
me.name = 'tom'
me.sayName()
```

## 2.相关介绍
...
## 3.应用场景
...

