//Value Types or Primitives are: Number,String,Boolean,Symbol,undefined,null
//Reference Types are: Object,Function,Array

//in case of primitives
let x=10;
let y=x;
x=20;
console.log(y); //output y=10;
//here it is shown that x and y are two independent variables

//incase of Reference types
let a={value:30}; // it is an object
let b=a;
a.value=40;
console.log(b); // output b={value:40}
/*when an object is created, this object is not stored in a variable,it is stored
somewhere in the memory and the address of that memory location is stored inside that variable
*/
//in this case both a and b are pointing to the same object in the memory
//any changes in the object are visible to both the variables

//conclusion
//Primitives are copied by value
//Objects are copied by thier reference

//another example
let number=10;
function increase(n){
    n++;
}
increase(number);
console.log(number);//outut:10


let obj={value:10};
function increase(Object){
    Object.value++;
}
increase(obj);
console.log(obj);//output: 11

