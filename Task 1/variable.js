// 1
var a = 10;
a = 20;
var a = 30;
console.log(a);
//ans- 30( first deaclration next reuse next redeclration)

// 2
var a = 5;
var a = 15;
console.log(a);
//ans - 15(first declaration and next redeclaration)

// 3
var a = 1;
a = 2;
a = 3;
console.log(a);
//ans - 3(declaration and reuse And reuse)

// 4
var a = 7;
a = 14;
var a = 21;
a = 28;
console.log(a);
// ans - 28(declaration,reuse,redeclaration,reuse)

// 5
var a = 100;
var a = 200;
a = 300;
console.log(a);
// ans - 300(declaration and redeclaration ,reuse)

// 6
var a = 9;
console.log(a);
// ans - 9(declaration)

// 7
var a = 11;
a = 22;
console.log(a);
// ans - 22(declaration,reuse)

// 8
var a = 50;
var a = 60;
var a = 70;
console.log(a);
// ans - 70(declaration,redeclaration,redeclaration)

// 9
var a = 2;
a = 4;
a = 6;
var a = 8;
console.log(a);
// ans - 8(declaration,reuse,reuse,redeclaration)

// 10
var a = 99;
a = 88;
console.log(a);
// ans - 88(declaration,reuse)


// 11
let b = 10;
b = 20;
console.log(b);
// ans - 20(declaration,reuse)

// 12
let b = 5;
b = 15;
b = 25;
console.log(b);
// ans - 25(declaration,reuse,reuse)

// 13
let b = 1;
console.log(b);
// ans - 1(declaration)

// 14
let b = 7;
b = 14;
console.log(b);
// ans - 14(declaration,reuse)

// 15
let b = 100;
b = 200;
b = 300;
console.log(b);
// ans - 300(declaration,reuse,reuse)

// 16
let b = 9;
let b = 18;
console.log(b);
// ans - syntax error(redeclaration not accept )

// 17
let b = 50;
b = 60;
let b = 70;
console.log(b);
// ans - syntax error(redeclaration not accept)

// 18
let b = 2;
b = 4;
console.log(b);
// ans - 4(reuse)

// 19
let b = 99;
b = 88;
b = 77;
console.log(b);
// ans - 77(reuse)

// 20
let b = 11;
b = 22;
console.log(b);
// ans - 22(reuse)

// 21
const c = 10;
console.log(c);
// ans - 10

// 22
const c = 5;
c = 15;
console.log(c);
// ans - syntax error(const not accept the reuse only constant value)

// 23
const c = 1;
const c = 2;
console.log(c);
// ans - syntax error(const not accept the redeclaration )

// 24
const c = 7;
console.log(c);
// ans - 7

// 25
const c = 100;
console.log(c);
// ans - 100

// 26
const c = 50;
c = 60;
console.log(c);
// ans - type error(not accepte the reuse)

// 27
const c = 9;
console.log(c);
// ans - 9

// 28
const c = 20;
const c = 30;
console.log(c);
// ans - syntax error

// 29
const c = 99;
console.log(c);
// ans - 99

// 30
const c = 11;
c = 22;
console.log(c);
// ans - type error(not accepte the reuse)

// 31
var a = 1;
var a = 2;
var a = 3;
console.log(a);
// ans - 3(declaration,redeclaration,redeclaration)

// 32
var a = 10;
a = 20;
a = 30;
var a = 40;
console.log(a);
// ans - 40(deaclaration,reuse,reuse,redeclaration)

// 33
var a = 5;
a = 15;
console.log(a);
// ans - 15(reuse)

// 34
var a = 100;
var a = 200;
var a = 300;
a = 400;
console.log(a);
// ans - 400(declaration,redeclaration,redeclaration,reuse)

// 35
var a = 7;
console.log(a);
// ans - 7

// 36
let b = 3;
b = 6;
b = 9;
console.log(b);
// ans - 9(reuse)

// 37
let b = 12;
let b = 24;
console.log(b);
// ans - syntax error

// 38
let b = 8;
b = 16;
console.log(b);
// ans - 16(reuse)

// 39
const c = 2;
console.log(c);
// ans - 2

// 40
const c = 4;
c = 8;
Console.log(c);
// ans - type error