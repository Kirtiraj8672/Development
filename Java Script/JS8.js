// fro each function
let arr=[1,2,3,4,5];
let print = function(el){
    console.log(el);
};

arr.forEach(print);




let array=[
    {
        name : "kirtiraj",
        marks : 65
    },
    {
        name : "kirti",
        marks : 95
    },
    {
        name : "raj",
        marks : 75
    }
];

let gpa = array.map((el) => {
    return el.marks/10;
});

array.forEach((student) => {
    console.log(student.marks);
});

let num = [1,2,3,4];

let double = num.map((el) => {
    return el * 2;
});

// filter 
let num2 = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = num2.filter((num) => (num % 2 == 0 ));


//reduce 
let nums = [1,2,3,4];
let finalVal = num.reduce((res,el) => (res+el));
console.log(`the final sum is ${finalVal}`);


//reduce max code 

 let array1=[1,4,2,5,6,7,2,9,2];

// let max = -1;

// for(let i =0; i<array1.length; i++ ){
//     if(max <array1[i]){
//         max = array1[i];
//     }
// }

// console.log(max);


let max = array1.reduce((max,el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log(max);


//pratice question 
let arraynum=[10,20,3,60,45,2,24];
let res=arraynum.every((el) => (el%10 == 0));

console.log(res);


//q2

function getmin(array10){
    

let min = arraynum1.reduce((min, el) => {
    if(min<el){
        return min;
    }else{
        return el;
    }

    });
    console.log(min);

}
let arraynum1=[10,20,3,60,45,2,24];

getmin(arraynum1);

function sum(a,b=2){
    return a+b;
}

//spread object literal 

const data = {
    email : "ironman@gmail.com",
    password: "abcd",
};

let dataCopy = {...data , id : 123};

//rest 

function sum1(...args){ //argument 
    for( let i =0; i<args.length ; i++){
        console.log("you gave us : " ,args[i]);
    }

}

function min(a,b,c,d){
    console.log(arguments);
}

//destructuring 

let names=["tony","bruce","peter","steve"];
let [winner,runnerup,...others] = names;
console.log(winner, runnerup ,others);
//original array will have no change in it 


//destrucutring object 
 const student = {
    name:"kirtiraj",
    age:14,
    class:"IT1TY",
    subject: ["AWP","CNS","CPDP"],
    username: "kirtiraj_8672",
    password:"abcd",
 };

 let { username, password }= student;

 //or if differnt vairable want to be used 

 let {username: user , password: hidden , city: place = "mumbai"} = student;
