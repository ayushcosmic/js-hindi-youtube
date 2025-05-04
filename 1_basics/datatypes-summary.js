//Primitive

// 7 types :String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100;
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123')

console.log(id==anotherId)
console.log(id);
console.log(anotherId);

// const bigNumber = 365489954123697

//Reference(Non Primitive)

//Array,objects,Function

const heros=["shaktiman","naagraj","doga"];

let obj1={
    name:"Ayush",
    age:22,


}

const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof myFunction)