---
title: new 操作符
date: 2023-03-13
cover: https://fastly.jsdelivr.net/gh/YunYouJun/cdn/img/bg/astronaut.webp
categories:
  - JavaScript
  - 手写代码
tags:
  - JavaScript
  - new
---


[[toc]]

## 1.代码实现
**思路：**

+ 创建一个新的空对象
+ 设置原型，将对象的原型设置为函数的`prototype`对象
+ 让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
+ 判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，就返回这个类型的对象

**实现：**
```JavaScript
function objectFactory(){
  let newObject = null
  // arguments参数数组调用arr的方法
  let constructor = Array.prototype.shift.call(arguments)
  let result = null
  // 判断参数是否是一个函数
  if(typeof constructor !== "function"){
    console.error("type error");
    return
  }
  // 新建一个对象，对象的原型为构造函数的prototype对象
  newObject = Object.create(constructor.prototype)
  // 将this指向新建对象，并执行函数
  result = constructor.apply(newObject,arguments)
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function")
  return flag?result:newObject
}
```
**测试：**

```JavaScript
function Person(name,age){
  this.name = name
  this.age = age
}
Person.prototype.sayName = function(){
  console.log(this.name, this.age);
}
let people = objectFactory(Person,"tom",20)
people.sayName()  //tom 20

```

## 2.相关介绍
## 3.应用场景
## 4.参考文章
