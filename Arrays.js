const numbers=[1,2,3,4,5,6];
const doublenumbers=[];
//using forEach loop to store each element of numbers , doubled in the doublenumbers using push method 
numbers.forEach(element => {
    doublenumbers.push(element*2);
});

//Most used methods of arrays
//map,filter,reduce

//map
//we can do the above task by using map method
const mapednumbers=numbers.map((num)=>{
    return num*2;
});
//the main difference between map and forEach is that map always expect a return statement in its body while forEach dont

//filter
//the filter method is used to filter out the desired elements 
//form an array and store it in another one
//it also expect a return statement in its body but with a conditional statement
//if the statement is true then it stores that element in the array and vice versa

const filterednumbers=numbers.filter((num)=>{
    return num>3;
}); //only numbers greater than 3 will be strored in the filterednumbers

//reduce