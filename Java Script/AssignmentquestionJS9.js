//q1
let body = document.querySelector("body")
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me ";

body.appendChild(input);
body.appendChild(button);

//q2
input.setAttribute("placeholder","Username");
button.setAttribute("id","btn");


//q3

let btn1 = document.querySelector("#btn");
btn1.style.backgroundColor="blue";
btn1.style.color="white";


//q4
let h1 = document.createElement("h1");
body.appendChild(h1);
h1.innerHTML="<u>DOM Pratice </u>";
h1.style.color = "purple";


//q5
let p = document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
body.appendChild(p);