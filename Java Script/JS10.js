// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick =function(){
// //     console.log(" button was clicked ");
// // }
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     // btn.onclick=sayhello;3
//     // btn.onmouseenter = function (){
//     //     console.log("you entered a button ");
//     // }
//     // console.dir(btn);

//     // btn.addEventListener("click",sayhello);
//     // btn.addEventListener("click",sayname);
//     btn.addEventListener("dblclick",function () {
//         console.log("you double clicked me ");
//     });
// }
                     

// function sayhello(){
//     alert("Hello");
// }

// function sayname(){
//     alert("college");
// }

// // btn.onclick =sayhello;


// //activity

// let btn= document.querySelector("button");


// btn.addEventListener("click",function(){
//     let h3 =  document.querySelector("h3");
//     let randomcolor = getRandomColor();
//     h3.innerText = randomcolor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;

//     console.log("color updated");
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }


// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("para was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// })


// let btn = document.querySelector("button");

// let h1 = document.querySelector("h1");

// let h3 = document.querySelector("h3");

// let p = document.querySelector("p");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// h1.addEventListener("click" , changeColor );
// h3.addEventListener("click" , changeColor );
// p.addEventListener("click" , changeColor );


// btn.addEventListener("dblclick" , function(event){
//     console.log(event)
//     console.log("button clicked ");
// } );

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
//     console.log("key=",event.key);
//     console.log("code =",event.code);
//     console.log("key was pressed ");
// })


// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function(){
//     console.log("key was relsed ");
// })


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log("code =",event.code);
//     if(event.code == "ArrowUp" ){
//         console.log("charter moves forward");
//     }else if(event.code == "ArrowDown" ){
//         console.log("charter moves backward");
//     }else if(event.code == "ArrowLeft" ){
//         console.log("charter moves Left");
//     }else if(event.code == "ArrowRight" ){
//         console.log("charter moves Right");
//     }

// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
    
//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#password");

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.dir(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// }
// );

// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("changed event");
//     console.log("final value is =",this.value);
// });

// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value is =",this.value);
// });

let inp= document.querySelector("#text");
let p= document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText= inp.value;
});