

//代码
function create (obj){
  function F(){}
  F.prototype = obj
  return new F()
}
// 测试
const person = {
  sayName:function(){
    console.log(`My name is ${this.name}.`)
  }
}
// let me = Object.create(person)
let me = create(person)
me.name = 'tom'
me.sayName()


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

console.log(myInstanceof(auto,Car));
// Expected output: true

console.log(myInstanceof(auto,Object));
// Expected output: true
