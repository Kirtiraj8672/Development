// console.log(" helloo JS");
// console.log(" byeee");
//  let a=5;
//  let b=10;
//  console.log("Sum is :" ,a+b);

// let pencilprice = 10;
// let eraserprice=5;
// // let output= "the total price is :"+ (pensilprice + eraserprice) + "rupees";
// let output=`The Total prices is : ${pencilprice + eraserprice} Rupees`;
// console.log(output);


// Arithmetic operations
// let a=10;
// let b=5;
//  console.log(a+b);
//   console.log(a-b);
//    console.log(a/b);
//     console.log(a*b);
//console.log(a%b);
//console.log(a ** b);
//console.log(a++);
// console.log(++a);
// let age=16;
// console.log(age>=18);


// console.log("before my if statement ");
// let age=23;
// if(age>=18){
//     console.log("you can vote ");
//     console.log(`your age is ${age}`);
// }
// console.log("after my if statement ");


// let color = "yellow";


// if(color=="yellow"){
//     console.log("Slow down");    
// }
// if(color=="red"){
//     console.log("Stop");    
// }
// if(color=="green"){
//     console.log("Go");    
// }

// let age =14;
// if(age>=18){
//     console.log("you can vote ");
// }
// else if(age<18){
//     console.log("you cannot vote ");
// }

// let marks=75

// if(marks>= 80 ){
//     console.log("A+");
// }

// else if(marks>=60){
//     console.log("A");
// }

// else if (marks>=33){
//     console.log("B");
// }

// else if (marks<33){
//     console.log("F");
// }



let month='january'

if(month==='january'){
    console.log("Winter is here ");
}
else if(month=='october'){
    console.log("Winter is coming ");
}
else if(month=='april'){
    console.log("summer is here  ");
}


let age=11;
if (age>=18){
    console.log("you can vote ");
}
else{
    console.log("you cannot vote");
}                    


let size="XL";

if(size=="XL"){
    console.log("price : 250")
}

else if(size=="L"){
    console.log("price : 200")
}

 else if(size=="M"){
    console.log("price : 100")
}

else {
    console.log("price : 50")
}


let marks=5
;

if(marks >=33){
    console.log("pass");
    if(marks>=80){
        console.log("garde o");
    }
    else{
        console.log("garde A");
    }

}else{
    console.log("Fail");
}


// practice question 
let string="app";
 
if(string[0]=="a" && string.length>3){
    console.log("good string");
}
else{
    console.log("not a good string");
}

let num =12;
if((num%3===0) && ((num+1==15)||(num-1==11))){ 
    console.log("safe");
}
else{
    console.log("unsafe");
}

 

let str=" ";
if (str){
    console.log("not empty ");
}
else{
    console.log("empty");
}

let color="red";
switch(color){
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down ");
        break;
    case "green" :
        console.log("go");
        break;
    default :
        console.log("broken light");
}


let day=1;
switch(day){
    case 1 :
        console.log("monday");
        break;
    case 2 :
        console.log("tuesday");
        break;
    case 3 :
        console.log("wednesday");
        break;
    case 4 :
        console.log("thursday");
        break;
    case 5 :
        console.log("friday");
        break;
    case 6 :
        console.log("saturday");
        break;
    case 7 :
        console.log("sunday");
        break;

}


console.error("this is error"); 


let cd="Random";
console.log(cd.toUpperCase());
console.log(cd.toLowerCase());


for(let k=1; k<=5 ; k++){
    console.log(k);
}

for(let j=10; j>=0 ; j--){
    console.log(j);
}