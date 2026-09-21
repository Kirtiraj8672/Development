//q1 

function rearry(){
    let num= 40;
    let arr=[1,45,86,4,32,5,3,9,28,63,863];
    for( let i=0; i<arr.length; i++ ){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }

}
rearry();



///q2

function unique(){
    let str="abcdabcdefgggh"
    let array = str.split("");

    for( let i=0 ;i<array.length ; i++){
       for(let j=0 ; j<i ;j++){
         if(array[i] === array[j]){
            array.splice(i,1);
            i--;
            break;
        }
       }
       
    }
    console.log(` ans:`, array.join(""));
}

unique();



// q2(oher way to get ans)

function unique1(){
     let str1="abcdabcdefgggh"
     let result  = [...new Set(str1)].join("") ;
     console.log("ans:" , result);
}


unique1();

//q3

function list(){
    let country=["australia","germany","united states of america"];
    let maxcountry = country[0];

    for(let i=1 ; i<country.length; i++){
       
        if(country[i].length > maxcountry.length){
            maxcountry= country[i];
        }
    }
    console.log(`${maxcountry} ${maxcountry.length}`);
}

list();


//q4

function countvowels(){
    let str45="adignepoigk";
    let araay56 = str45.split("");
    let count=0;
    
    for(let i=0 ; i<araay56.length ;i++){
        if(araay56[i] === "a"|| 
            araay56[i] === "e"||
            araay56[i] === "i"||
            araay56[i] === "o"||
            araay56[i] === "u"){
            count=count+1;
        }

    }console.log(count);
}
 countvowels();


//q5

function random(start,end){
    let gen=Math.floor(Math.random()*(end-start+1))+start;
    console.log(gen);
}
random(10,20);