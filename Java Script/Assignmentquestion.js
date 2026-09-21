 let num=50;
 if(num%10==0){
    console.log("good");
 }
 else{
    console.log("bad")
 }

 // question2 

 let username=prompt("Enter User name :");
 let age=prompt("Enter age ");
 alert(username+" is "+age+" year old ");

 // question 3 

 let number=2;
 switch(number){
    case 1 :
        console.log("January,february, march");
        break;
    case 2 :
        console.log("april,may, june");
        break; 
    case 3 :
        console.log("july,august, september");
        break;
    case 4 :
        console.log("october,november, december");
        break;   
    default :
        console.log("wrong number entered")
 }


 // quesion 4 
 let str="Applicatopn";
 if( ( str[0] === "a"|| "A" ) && (str.length > 5) ){
    console.log("golden string");
 }
 else{
    console.log("not golden string ");
 }


 //question 5 
 let num1 = 45 ;
 let num2 = 56 ;
 let num3 = 65 ;

 if (num1>num2){
    if(num1>num3){
        console.log("largest number is " + num1  );
    }
    else{
        console.log("largest number is " + num3  );
    }
 }
else{
    if(num2>num3){
        console.log("largest number is " + num2  );
    }
    else{
        console.log("largest number is " + num3  );
    }

 }

//question 6
let a=32;
let b=4785;

if(a%10 == b%10){
    console.log("both the number are same last digit which is ", a%10);
}
else{
    console.log("both the number are not same last digit which is ");

}


//pratice question 
//1
let msg="help";
console.log(msg.toUpperCase());

//2 
  


//js 3 assiigment question 

//1 

let arr=[7,9,0,-2,4,2,7,99];
n=3;
let arr1 = arr.splice(0,n);
console.log( arr1);
//2
let arr2 =arr.splice(arr.length-n);
console.log( arr2);

//3
let str1="";
if(str1.length==0){
    console.log("isempty");
}
else{
    console.log("not empty");
}

//4
let strchar="this is a STRING ";
let idx=3 ;
if(strchar[idx] == strchar[idx].toLowerCase()){
    console.log("charater is lower case")

}
else{
    console.log("charae isnot lower case ")
}


//5

let stren= prompt("enter the string ");
console.log('originalstring =', {stren} );
let str45=stren.trim();
console.log('string without spaces  =' ,{str45} );



//6

let arr20=[1,2,40,45];
let item =40;
 
if (arr20.indexOf(item)!=-1){
    console.log("Eleement exist ");

}
else{
    console.log("Elemnt does not ecist ");

}