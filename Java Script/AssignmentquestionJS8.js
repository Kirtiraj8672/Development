//q1

let array=[1,4,6,2,632,6,2,7];
let sum= array.reduce((add,el) => add+el);
let squre = array.map((el) => el*el);
let avg =sum /array.length;

console.log(`sum: ${sum} , squre: ${squre} , avg ${avg}`);

//q2


let array1=[1,4,6,2,632,6,2,7];

let newarray= array1.map((el) =>
   { return el+5;}
);

//q3

let alparray=["cms","csv","cnd","cpdp"];
let newaplarray = alparray.map((el) => {
    return el.toUpperCase();
})

//q4
 const doubleAndReturnArgs =(arr,...args) =>[
    ...arr,
    ...args.map((v) => v*2),
 ];
 doubleAndReturnArgs([1,2,3],4,4);
 doubleAndReturnArgs([2],10,4);



 //q5
 const mergObjects = (obj1,obj2) => ({...obj1,...obj2});
 mergObjects({a:1 ,b:2},{c:3 ,d:4});