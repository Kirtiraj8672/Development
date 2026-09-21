// let arr = [1,2,3];
// let arr2 = [1,2,3];
// arr.sayHello = () => {
//     console.log("hello , iam arr ");
// };

// function personMaker(name, age ){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`);
//         },
//     }
//     return person;
// }

// let p1 = personMaker("adam",24); //copy1
// let p2 = personMaker("eve",27); //copy2

//Constructure doesnot return anything & start with capital letter
// function Person(name, age ){
//     this.name = name ;
//     this.age = age ; 
// }

// Person.prototype.talk = function(){
//     console.log(`Hi,my name is ${this.name} `);
// };

// let p1 = new Person("aadam",34);
// let p2 = new Person("eve",23);


//class 

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age ;
//     } ;

//     talk(){
//      console.log(`Hi,my name is ${this.name} `);
//     }
// }


// let p1 = new Person("aadam",34);
// let p2 = new Person("eve",23);

class Person{
    constructor(name,age){
        this.name =name;
        this.age =age;
    }
    talk(){
        console.log(`Hi, I am ${this.name} `);

    }
}

//Inheritance
class Student extends Person{
    constructor(name,age, marks){
        super(name,age);//parent class constructor is being called
        this.marks = marks;
    }
    
}

let stu1 = new Student("Bhide",45,95);

class Teacher extends Person{
    constructor(name,age, subject){
        super(name,age);//parent class constructor is being called
        this.subject = subject;
    }
}


class Mammal{
    constructor(name){
        this.name = name ;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eating ");
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof wooff");
    }
}


class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow meow");
    }
}