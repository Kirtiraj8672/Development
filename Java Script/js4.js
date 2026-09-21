 for(let i=1; i<=15 ;i++){
    if ( i%2 != 0){
        console.log(i);
    }
 }

  for(let i=1; i<=15 ;i=i+2){
   
        console.log(i);
    
 }

 for(let i=2; i<=10 ;i=i+2){
   
        console.log(i);
    
 }


 for(let i=2; i<=10 ;i++){
    if ( i%2 == 0){
        console.log(i);
    }
 }


 for (let i=5 ; i<=50 ;i=i+5){
    console.log(i);
 }
    
for (let i=1; i<=3; i++){
   for(let j=1; j<=3; j++){
      console.log(j);
   }
}


// console.log("while loop");
// //let i=1 
// // while(i<=5){
// //    console.log(i);
// //    i++;
// // }

// while(i<=20){
//    console.log(i);
//    i++;
// }

console.log("Favorite movie");

let Favmovie="Avatar";
let guess=prompt("Guess the Movie ");

while(guess != Favmovie && guess != "quit"){
   
   guess=prompt(" wrong guess enter the Movie Again");
}
 
while(guess == Favmovie){
   console.log("Corect movie guessssssssssss");
   break;
}


console.log("Loop in Array");

let fruits=["Mango","apple","banana","litchi","orange"];

for(let i=0 ; i<fruits.length ; i++){
   console.log("index" , i,fruits[i]); 
}

for(let i=(fruits.length-1) ; i>=0 ; i--){
   console.log("index" , i,fruits[i]); 
}

console.log("nested loop with neated array");

let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

for(let i=0 ;i<heroes.length ;i++){
   console.log(`list # ${i}`);
   
   for(let j=0 ; j<heroes[i].length ; j++){
    
      console.log(` j=${j}, ${heroes[i][j]}`);
   }
}


console.log("for of loop");

// fruits array is used 
for( let fruit of fruits){
   console.log(fruit);
}

for(char of "apna college"){
   console.log(char);
}

console.log("nested for of loop ");
//heroes nested array is used 
 for(list of heroes){
   for(hero of list ){
      console.log(hero);
      
   }
 }


console.log("To Do List ");

// let list=[];

// op=prompt("enter the function")

// if(op=="add"){
// let add=prompt("Enter TODO");
// list.push(add);
// }

// if(op == "remove" ){
// let remove =prompt("delete TODO");
// list.pop();
// }
// else{
//    break ;
// }
  

let todo=[];

let req = prompt("enter your request");

while(true){
   if(req == "quit"){
      console.log("quitting todo");
      break;
   }

   if (req == "list"){
      console.log("------------------");
      for(let i = 0 ; i<todo.length ;i++){
         console.log(i, todo[i]);
      }
      console.log("------------------");
   }
   else if(req == "add") {
      let task = prompt("enter the task u want to add");
      todo.push(task);
      console.log("task added");
      
   }
    else if (req == "delete" ){
      let idx=prompt("enter the index number :");
      todo.splice(idx,1);
      console.log("task deleted ");
    }

   req = prompt("enter your request");
   
}

 