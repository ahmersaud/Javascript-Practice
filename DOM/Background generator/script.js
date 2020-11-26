let css = document.querySelector("h2");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");


//this way is also true
// color1.addEventListener("input",function () {
//     body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";

    
// });

// color2.addEventListener("input",function () {
//     body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";

    
// });

function setGradient() {
    body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
    css.textContent = body.style.background+";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);