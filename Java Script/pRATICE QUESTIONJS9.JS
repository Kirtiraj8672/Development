//q1

let para1 = document.createElement('p');
para1.innerText="hey i am red";
para1.style.color="red";
let body = document.querySelector("body");
body.appendChild(para1);


//q2
let h3 = document.createElement('h3');
h3.innerText="hey i am blue h3 ";
h3.style.color="blue";
body.appendChild(h3);


//q3 
let div=document.createElement("div");

let h1 = document.createElement("h1");

let p = document.createElement("p");

h1.innerText = "I'm a div";
p.innerText = "Me Too";

div.appendChild(h1);
div.appendChild(p);

div.style.border = "1px solid black";
div.style.backgroundColor = "pink";



body.appendChild(div);
