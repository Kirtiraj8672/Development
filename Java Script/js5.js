console.log("object litreals");
//object litreals

const student = {
    name : "Kirtiraj",
    age : 19,
    marks : 64.4,
    city : "vadodara"
};

const item = {
    price : 100.99,
    discount : 50,
    color : ["red","pink"]
};

//twitter/thread post 
const post = {
    username : "@kirtiraj",
    content : "this is my #first post ",
    likes : 150 ,
    repost : 5,
    tags : ["@apna collge ","@delta"]
};

// get value (to access of data )
//check notes 

const obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : "e"
};

// add\update values 

// const student = {
//     name : "Kirtiraj",
//     age : 19,
//     marks : 64.4,
//     city : "vadodara"
// };

// add and updating will be done in console so check notes 


// object of object 

const classinfo = {
    aman :{
        grade : "A+",
        city : "Delhi"
    },

    shradha : {
        grade : "A",
        city : "pune"
    },

    karan : {
        grade : "O",
        city : "Mumbai"
    }
};



// array of object 

const classinfo1 = [
    {
        name: "aman",
        grade: "A+",
        city : "Delhi"
    },
    {
        name: "shradha",
        grade: "A+",
        city: "pune"
    },
    {
        name: "Karan",
        grade: "O",
        city : "Mumbai"
    }
];


// random Integer 
// performed in console check notes 


// questions 
//generate a random number between 1 to 100

let randomnum = Math.floor(Math.random() * 100 ) + 1 ;
 console.log(randomnum);


//genrate a number between 1 to 5 

let randomnum1 = Math.floor(Math.random()* 5 )+1;
console.log(randomnum1);

//genrate a number between 21 to 25 

let randomnum2 = Math.floor(Math.random()* 5 )+ 21;
console.log(randomnum2);

/// guessing game 

const max=prompt("Enter the Max number");
// console.log(`max number ${max}`);
 
const randomnum3 = Math.floor(Math.random( ) * max) +1 ;
// console.log(`RAndom number is ${randomnum3}`);


let guess = prompt("guess the number ");

while(true){
    if( guess == "quit"){
        console.log("user quit ");
        break;
    }

    if( guess == randomnum3){
        console.log("you are correct !!! random number was " , randomnum3 );
        break;
    }
    else if (guess<randomnum3){
        guess = prompt(" hint: your guess was too small , try again ");
    }
    else if (guess>randomnum3){
        guess = prompt(" hint: your guess was too large , try again ");
    }
    // else{
    //     guess = prompt("your guess was wrong try again ");
    // }
}