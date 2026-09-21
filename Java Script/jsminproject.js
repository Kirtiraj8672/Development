// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");


// div.addEventListener("click", function() {
//     console.log("div is clicked ");
// });

// ul.addEventListener("click", function() {
//     console.log("ul is clicked ");
// });

// for(li of lis) {
// li.addEventListener("click", function() {
//     console.log("li is clicked ");
// });
// }

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText= inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);

    ul.appendChild(item);
    inp.value="";
   

}); 

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("delete");

    }
    
    console.log("clicked");
})

// let delbtns= document.querySelectorAll(".delete");

// for (delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
   
//     let par = this.parentElement;
//     par.remove();
// })
// }