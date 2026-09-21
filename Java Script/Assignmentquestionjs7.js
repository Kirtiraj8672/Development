//q1
let arr=[45,1,863,42,8,415,2,3];
let arrayAverage = (arrayname) => { 
    let sum=0;
    for(let i=0 ; i<arrayname.length; i++){
        sum+=arrayname[i];
    }
    let avg = sum/ arrayname.length;
    console.log(avg);
}
arrayAverage(arr);


//q2 write an arrow function naed even that takes a singlw number as argument and return it is even or not 
let even = (n) => {
    if(n%2 === 0){
        return "even number is even  ";
    }
    else{
        return "number is odd ";
    }
 
}

//q3 helloworld