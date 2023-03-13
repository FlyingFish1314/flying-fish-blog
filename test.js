

//代码
// function create (obj){
//   function F(){}
//   F.prototype = obj
//   return new F()
// }
// 测试
// const person = {
//   sayName:function(){
//     console.log(`My name is ${this.name}.`)
//   }
// }
// let me = Object.create(person)
// let me = create(person)
// me.name = 'tom'
// me.sayName()


function myInstanceof(left,right){
  //获取对象的原型
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的prototype对象
  let prototype =right.prototype;
  while(true){
    if(!proto) return false
    if(proto === prototype) return true

    proto = Object.getPrototypeOf(proto)
  }
}

function Car (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

// console.log(myInstanceof(auto,Car));
// Expected output: true

// console.log(myInstanceof(auto,Object));
// Expected output: true


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


function Person(name,age){
  this.name = name
  this.age = age
}
Person.prototype.sayName = function(){
  console.log(this.name, this.age);
}
let people = objectFactory(Person,"tom",20)
people.sayName()  //tom 20
