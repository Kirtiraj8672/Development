// function hello(){
//     console.log("inside hello  function ");
//     console.log("hello");
// }


// function demo(){
//     console.log("calling hello function ");
//     hello();
// }

// console.log("calling  demo  function ");
// demo();
// console.log("done , byeeeeeee ");


// function one(){
//     return 1 ;
// }
// function two(){
//     return one() + one() ;
// }

// function three(){
//     let ans = two() + one() ; 
//     console.log(ans);
// }

// three();

// let a= 25;
// console.log(a);
// let b = 10 ;
// console.log(b);
// console.log(a+b);


// setTimeout(()=>{
//     console.log("apna college")
// },2000);

// console.log("hello world ");



// let h1 = document.querySelector("h1");

// function changeColor( color , delay ,nextcolorchange){
//     setTimeout(( )=> {
//         h1.style.color  = color;
//         if(nextcolorchange)nextcolorchange();
//     },delay)
   

// // }
// changeColor("red",1000 , () => {
//     changeColor("orange",1000 , () => {
//         changeColor("green",1000,() => {
//             changeColor("yellow",1000)
//         });
//     });
// });

// let h1 = document.querySelector("h1");

// function changeColor( color , delay){
//     return new Promise( ( resolve, reject ) => {
//         setTimeout(()=> {
//             h1.style.color  = color;
//             resolve("color changed ");
//     }, delay);
//     });
// }


// changeColor("red" ,1000)
// .then(() =>{
//     console.log(" red color was completed ");
//     return changeColor("orange" ,1000);
// })
// .then(() => {
//     console.log("organge color was completed ");
//     return changeColor("green" ,1000);
// })
// .then(()=> {
//     console.log("green color was completed ");
//     return changeColor("blue",1000);
// })
// .then(()=> {
//     console.log("blue color was completed ");
// })

// function savetoDB(data, success , failure){
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }


// savetoDB(
//     "apan college",
//     () =>{
//     console.log("success :your data was  saved");

//     savetoDB(
//         "hello world",
//          () => {
//         console.log("sucess 2 : data 2 saved ");

//         savetoDB("svit vasad" , () => {

//             console.log("sucess 3 : data 3 saved ");
//         } , () => {
//             console.log("failure 3: weak connection   ");
//         });
//     } , () => { 
//         console.log("failure 2: weak connection   ");
//     } );
//     },
//     () => 
//         {
//         console.log("failure : weak connection , data not saved ");
//     } );


// function savetoDB(data){
    
//    return new Promise((resolve , reject) => {
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//     if(internetSpeed>4){
//         resolve(" success: data was saved ");
//     }else{
//         reject("failure : weak connection ");
//     }
//    });
// }

// savetoDB("apna college ")
//     .then( (result) => {
//         console.log("data 1 saved. promise was resolved ");
//         console.log(" result of promise ", result);
//         return savetoDB("helloworld");
//     })
//     .then( (result) => {
//         console.log("data 2 was saved ");
//         console.log(" result of promise ",result);
//         return savetoDB("college");
//     })
//     .then((result) => {
//         console.log("data 3 was saved ");
//         console.log(" result of promise ",result);

//     })

//     .catch( (error) => {
//         console.log("promise was rejected ");
//         console.log(" error of promise ",error);
//     })

async function greet(){
    throw "weak connection "
    return "hello!";
}

greet()
.then((result)=> {
    console.log("promise was resolved");
    console.log("result was: " , result );
})

.catch((err)=>{
    console.log("promise was rejected with error " ,err);
})


// let demo = async() => {
//     return 5;
// }


// function getnum(){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//         let num =Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//         },1000);
//     }) 
// }
// async function demo(){
//     await getnum();
//     getnum();
//     getnum();



// }

let h1 = document.querySelector("h1");

function changeColor( color , delay){
    return new Promise( ( resolve, reject ) => {
        setTimeout(()=> {
            h1.style.color  = color;
            resolve("color changed ");
    }, delay);
    });
}
 async function demo(){
    await changeColor("Red" ,1000);
    await changeColor("orange" ,1000);
    await changeColor("green" ,1000);
    await changeColor("yellow" ,1000);
    await changeColor("blue" ,1000);

 }


 let jasoRes='{"fact":"Baking chocolate is the most dangerous chocolate to your cat.","length":61}';
 console.log(jasoRes.fact);
 
// let validRes = JSON.parse(jasoRes);
// console.log(validRes);

let student= {
    name :"student",
    marks: 45
};