// let btn= document.querySelector('button');

// btn.addEventListener("mouseout", function(){
//     console.log("mouse out is being used ");
// });



let inp = document.querySelector("input");
inp.addEventListener("keypress",function(){
    console.log("key pressed ");
})


let box = document.querySelector(".box");

box.addEventListener("scroll",function(){
    console.log("scroll is been in work ");
});


window.addEventListener("load",function(){
    console.log("the whole content is loaded");
});
//q2
let body = document.querySelector("body");

let btn1 = document.createElement("button");

body.appendChild(btn1);
btn1.innerText = "this is button ";
btn1.addEventListener("click",function (){
    btn1.style.backgroundColor="green";

});

//q3

let input = document.querySelector("#input");

let h2 = document.querySelector("h2");

input.addEventListener("input",function(){
    let value= input.value.replace(/[^a-zA-Z]/g,"");

    input.value=value;
    h2.innerText=value;
});