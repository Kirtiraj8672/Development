function hello(){
    console.log("hello");
}


hello();



function printname(){
    console.log("kirtiraj");
}

printname();

function print1to5(){
    for(let i=1 ; i<=5 ; i++){
        console.log(i);
    }
}


print1to5();


function isadult(){
    let age = 18;
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("not adult ");
    }
}


isadult();


function poem(){
    console.log("twinkel khana was a super start");
    console.log("now i wonder where she is ?");
}

poem();


function rolldice(){
    let randomnumber=(Math.floor(Math.random()*6)+1);
    console.log(randomnumber);
}

rolldice();


function printname1(name , age ){
    console.log(`${name} age is ${age}`);
}

printname1("Kirtiraj",45);

// the missig data is in college libray pc 

function sumnum(n){
    let sum4 = 0;
    for ( let i = 1; i<=n ; i++ ){
         
         sum4 = sum4+i;
       
    }
     console.log(sum4);

}

sumnum(5);

let str=["hi","hello","byee","!"];
function concat(str){
    let result="" ;

    for(let i=0 ; i<str.length ; i++){
        result = result + str[i];
    }
    console.log(result);
}





concat(str);

let sum = function(a,b){
    return a+b;
}

function multiplegreet(func,count){
    for(let i=1 ; i<=count ; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multiplegreet(greet,2);



function oddeventest(request){
    if(request == "odd"){
        let odd  = function(n){
    console.log(!(n%2 == 0));
    }
    return odd;
    }else if (request == "even"){
        
    let even  = function(n){
        console.log(n%2 == 0);
    }
    return even;
    }else{
        console.log("wrong request ");
    }
}
//method short hand 

const calculator ={
    add(a,b){
        return a+b ;
    },
    sub(a,b){
        return a-b;
    }
}
