

class person {
    constructor(){
        console.log('hello world')
    }
    showMsg(){
        console.log('222')
    }
    showOtherMsg = ()=>{
        console.log('other msg')
    }
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return person.staticProperty;
    }
}
var p  =new person()
p.showMsg() 
p.showOtherMsg()
console.log(p.staticProperty);