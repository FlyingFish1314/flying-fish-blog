---
title: instanceof 方法
date: 2023-03-13
cover: https://fastly.jsdelivr.net/gh/YunYouJun/cdn/img/bg/astronaut.webp
categories:
  - JavaScript
  - 手写代码
tags:
  - JavaScript
  - instanceof
---

## 1.代码实现
> 描述：`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

**代码：**
```JavaScript
function myInstanceof(left,right){
  //获取对象的原型
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的prototype对象
  let prototype =right.prototype;
  // 判断构造函数的prototype 对象是是否再对象的原型链上
  while(true){
    if(!proto) return false
    if(proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
```
**测试：**
```JavaScript

function Car (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(myInstanceof(auto,Car));
// Expected output: true

console.log(myInstanceof(auto,Object));
// Expected output: true

```
## 2.相关描述
## 3.应用场景
## 4.参考文章
+ [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
+ [前端面试题汇总](https://www.yuque.com/cuggz/interview/pkg93q#LOOJA)

