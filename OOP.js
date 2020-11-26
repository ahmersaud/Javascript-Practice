//creating an object
//here an object is created directly and stored in a constant circle
const circle={
    radius:1,
    draw:function(){
        console.log("Draws a circle");
    }
};
//its members can be accessed as follows
console.log(circle.radius);
console.log(circle.draw());

//other ways of creating objects

//creating objects through factory functions
function createCircle(r){
    return {radius:r,
     draw:function(){
         console.log("Draws a circle")
     } 
    };
}

const circle1=createCircle(2);
console.log(circle1.radius);

//creating objects through constructor funtions
//this concept is same as classes in c++ or java but actually this is not a class , it is a function
function Circle(r){
    this.radius=r,
    this.draw=function(){
         console.log("Draws a circle")
     } 
    
}

const circle2= new Circle(5);  //must use new operator or else this Circle function can make changes in the public objects i-e window etc
//without using the new operator i-e const circle2=Circle(5); then the 'this' in the function will point to global objects
//when we use the new operator three things happen
//1.This new operator will create an empty object
//2.Then it set 'this' to point to that object created in 1.
//3.It will return that object from the Circle(r) function implicitly ,note that the return statement is not explicitly written (it will happen automatically)

console.log(circle2.radius);
 

//Adding and removing properties
//adding properties
circle2.location={x:1};
console.log(circle2.location);

//properties can also be added through Bracket notation
//circle1['location']={x:2};
//this notation can also be usefull in certain scneraios 
//like accessing the properties dynamically and other
let propertyName='location';
circle1[propertyName]={x:1};

//Deleting the property name
delete circle1.location;
//OR
delete circle2['location'];

