// Section 1

// 1.

let nam = "kishor";
let designation = "associate software engineer";

console.log(nam);
console.log(designation);

// 2

alert("welcome to javascript class");

// 3

let userwish = confirm("do you like coding");

console.log(userwish);

// 4

let food = prompt("what is your favorite food");
console.log(food);

// 5

document.writeln("good morning team");

console.clear();

// Section 2

// 6

let a =50;
 
console.log(a);

// 7

console.warn("this is a warning");

// 8

console.error("Something went rong")

// 9

console.clear();

// Section 3

// 10

let myname="kumar"

console.log(myname);
console.log(typeof(myname));

// 11

let myage = 25;

console.log(typeof(myage));

// 12

let boo = false;

console.log(typeof(boo));

// 13

let c;

console.log(c);

// 14

let d = prompt();

console.log(d)

// 15

let fruits = ["apple","banana","kiwi","mango","cherry"];

console.log(fruits);

// 16

let fruit = ["apple","banana","kiwi","mango","cherry"];

console.log(fruit[0]);
console.log(fruit[4]);

// 17

let addfruit = prompt("add the fruit");

fruit.push(addfruit);

console.log(fruit);

// 18

fruit.pop()

console.log(fruit);

// 19

console.log(fruit.length);

// section 5

// 20

let student = {
    Name : "kishor",
    age :25,
    course : "Full stack web development"

}

// 21

console.log(student.Name);

// 22

student.college = "Anna university";

// 23

console.log(student);
console.log(student.Name);
console.log(student.age);
console.log(student.course);

// 24

student.age = 26;

console.log(student.age);

// Section 6

// 25

var x=10;
var y=10;

console.log(x+y);

// 26

console.log(x-y);

// 27

console.log(x*y);

// 28

console.log(x/y);

// 29

console.log(x%y);

// 30

console.log(3**2);

// Section 7

// 31

let q = 10;

q++;

console.log(q);

// 32

console.log(++q);

// 33

// num++

x1 = 5;

console.log(x1++); //first use the value ans=5 then +1

console.log(x1); // now the ans 6

// ++num

x1 = 5;

console.log(++x1); //first increse the value 6

// 34

y1 = 5;

console.log(y1--); // ans 5 next decrese the value
console.log(y1); // ans 4

console.log(--y1); // first decrese the value 3

// 35

let a = 5;
let b = a++;
let c = ++a;

console.log(a); // a value is 7
console.log(b); // b value is 5
console.log(c); // c value is 7

// Section 8

// 36

 let age = prompt(" what is your age : ")
 
 if(age>=18)
    {
console.log("you are eligible to vote");

 }
 else{
    console.log("you are not eligible to vote")
 }

//  37

let cusname= prompt("what's your name")

document.writeln("Hello  " + cusname);

// 38

let marks = [75, 88, 92, 67, 81];
let highest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
}

console.log("highest marks:", highest);

// 39

let fruits  = {
    yellowfruits: ["Mango", "Pineapple"],
    greenfruits: ["guava", "grapes"],
    whitefruits: ["cocounet", "lychee"]
};

console.log("yellowfruits:", fruits.yellowfruits);
console.log("First greenfruits:", fruits.greenfruits[0]);
console.log("whitefruits", fruits.whitefruits);

// 40

let favFruits = [];

for (let i = 0; i < 3; i++) {
    let fruit = prompt("Enter your favorite fruit:");
    favFruits.push(fruit);
}

console.log("Your Favorite Fruits:", favFruits);

