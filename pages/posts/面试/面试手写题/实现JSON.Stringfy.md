---
title: 实现JSON.stringify
date: 2023-03-19
updated: 2022-03-19
cover: https://fastly.jsdelivr.net/gh/YunYouJun/cdn/img/bg/astronaut.webp
categories:
  - 面试题
  - 编程实现
tags:
  - 扁平化
---

## 1.代码实现
```JavaScript
function jsonStringfy(data) {
  let type = typeof data;
  if (type !== "object") {
    let result = data;
    if (Number.isNaN(data) || data === Infinity) {
      // NaN和Infinity序列化返回 "null"
      return "null";
    } else if (
      type === "function" ||
      type === "undefined" ||
      type === "symbol"
    ) {
      // 由于 function 序列化返回 undefined 因此和undefined、symbol一起处理
      return undefined;
    } else if (type === "string") {
      return '"' + data + '"';
    }
    return String(result);
  } else if (type === "object") {
    if (data === null) {
      return "null";
    } else if (data.toJSON && data.toJSON === "function") {
      // 对象可能内置toJSON方法来自定义序列化对象
      return jsonStringfy(data.toJSON());
    } else if (data instanceof Array) {
      let result = [];
      data.forEach((item, index) => {
        if (
          typeof item === "undefined" ||
          typeof item === "function" ||
          typeof item === "symbol"
        ) {
          result[index] = "null";
        } else {
          result[index] = jsonStringfy(item);
        }
      });
      result = "[" + result + "]";
      return result.replace(/'/g, '"');
    } else {
      // 处理普通对象
      let result = [];
      Object.keys(data).forEach((item, index) => {
        if (typeof item !== "symbol") {
          // key 如果是 symbol对象，忽略
          if (
            data[item] !== undefined &&
            typeof data[item] !== "function" &&
            typeof data[item] !== "symbol"
          ) {
            result.push('"' + item + '"' + ":" + jsonStringfy(data[item]));
          }
        }
      });
      return ("{" + result + "}").replace(/'/g, "");
    }
  }
}
```
**代码来源：**
+ [自己实现一个JSON.Stringify 方法](https://juejin.cn/post/6999236593579982885)
