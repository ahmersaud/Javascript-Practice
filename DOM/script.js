// var button=document.getElementById("Click");
// button.addEventListener("click",function(){
 
//     console.log("CLicked")
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createUlistitem(){
    var li=document.createElement("li"); //creating an li element
    li.appendChild(document.createTextNode(input.value)); //adding text to li element
    ul.appendChild(li);    //appending the above li to ul
    input.value="";

} 

function getInput(){
    return input.value.length;
}

function addlistafterclick(event)
    { 
    if(getInput()>0){

        createUlistitem();


}
}

button.addEventListener("click",addlistafterclick);

// input.addEventListener("keydown",function (event)//as explained above {
// { 
//     if(input.value.length>0 && event.code===13){
//         var li=document.createElement("li"); //creating an li element
//         li.appendChild(document.createTextNode(input.value)); //adding text to li element
//         ul.appendChild(li);    //appending the above li to ul
//         input.value="";
    
    
//  }
// });
    
