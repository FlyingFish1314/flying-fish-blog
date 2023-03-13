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
