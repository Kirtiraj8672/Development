// // const student ={ 
// //     name: "kirtiraj",
// //     age:19,
// //     eng:48,
// //     math:78,
// //     phy:67,
// //     getavg() {
// //         let avg=( this.eng+ this.math+ this.phy)/3;
// //         console.log(` ${this.name} have average marks of ${avg}`);
// //     }
// // };
 

// console.log("hello");
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }catch{
//     console.log("a is not delecrade ");
// }

// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// //arrow function
// const sum = (a,b) => {console.log(a+b);}; 

// //arrow function //implicit function

// const mul=(a,b) => (a*b);

// //set timeout
// console.log("hi heree !!!!");

// setTimeout(() => {
//     console.log("SVIT");
// },4000);

// console.log("welcome too");



// let id = setInterval(() => {
//     console.log("SVIT interval");
// },2000);

// const student ={ 
//     name: "kirtiraj",
//     marks:95,
//     prop: this,///global scope
//     getname: function(){
//         console.log(this);
//         return this.name;
//     },
//     getmarks: () =>{
//         console.log(this);//parentscope => window 
//         return this.marks;
//     },

//     getinfo1: function(){
//         setTimeout(() => {
//             console.log(this);//student 
//         }, 2000);
//     },
//     getinfo2: function(){
//         setTimeout( function() {
//             console.log(this);//windows 
//         }, 2000);
//     },
    

    
// };

//question 

let square =(n) => console.log (n**n) ;

square(2);

let count=0;
let id2 = function(){
   let id45 = setInterval(  ()  =>{
    
    console.log("hello world ");
    count++ ;

    if(count === 5){
        clearInterval(id45);
    }
},2000);
};

id2();

//or 

let id = setInterval(() => {
    console.log("hello world 2.0");     
},2000);

setTimeout( () => {
    clearInterval(id);
},10000);