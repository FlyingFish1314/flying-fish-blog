---
title: 替换空格
create: 2023-03-17
update: 2023-03-17
cover: https://cdn.jsdelivr.net/gh/FlyingFish1314/chartbed/dog.jpg
categories:
  - 算法
  - leetcode
tags:
  - 双指针
---

## 1.题目[剑指 Offer 05. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

**实例1**
>输入：s = "We are happy."
输出："We%20are%20happy."

## 2.题解
### 2.1双指针
```JavaScript
var replaceSpace = function(s) {
   let arr = Array.from(s)
  //  let arr = s.split("")
   let count = 0
   for(let i=0;i<arr.length;i++){
       if(arr[i] === " ") count++
   }
   let left = arr.length-1,right = arr.length + count*2 -1;
   while(left >= 0 ){
       if(arr[left] !== " "){
           arr[right--] =  arr[left--]
       }else{
           arr[right--] = "0"
           arr[right--] = "2"
           arr[right--] = "%"
           left--
       }
   }
   return arr.join("")
};
```
### 2.2正则表达式
```JavaScript
var replaceSpace = function(s) {
   return s.replace(/\s/g,"%20");
};
```
### 2.3 API
```JavaScript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
   return s.split(" ").join("%20");
};
```

## 3.记录
+ 2023-03-17  一刷

## 4.参考
+ [leetcode](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/submissions/)
+ [代码随想录](https://programmercarl.com/%E5%89%91%E6%8C%87Offer05.%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)
+ 小伙伴助力多种解法

