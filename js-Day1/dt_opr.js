// DATATYPES
//  string, number, boolean, null, undefined, symbol, biginit, object

let x;

console.log(typeof('Hello World'))
console.log(typeof(11))
console.log(typeof(true))
console.log(typeof(null))
console.log(typeof(x))
console.log(typeof(Symbol('id')))
console.log(typeof(12345678901234567890))
console.log(typeof({id:1}))

// TYPE COVERSION
// Automatic || Implicit Conversion

console.log("5" + 5) //ans=55(string form) as '+' works as concatetion of the string 
console.log("5" - 2) //ans=3(num form) as here '-' does not works on string so automatically type will be changed and resultant is 3

// Manual || Explicit Conversion

const num = Number('123456')
const str = String(123)
console.log(num, str)

// OPERATORS
// Arithmetic(+, -, *, /, //, %, **)

console.log(30+20)
console.log(30-20)
console.log(30*20)
console.log(30/20)
console.log(Math.floor(30/2))
console.log(30%20)
console.log(30**20)

// Comparison(==, ===, !=, <, <=, >, >=)

console.log(5 == '5') //loose comparison as it checks value only not the type of value
console.log(5 === '5') //strict comparison as it checks both value and its type strictlly
console.log(5 != 5)
console.log(10 < 5)
console.log(10 <= 5)
console.log(10 > 5)
console.log(10 >= 5)

// Logical(&&, ||, !)

console.log(true && false)
console.log(true || false)
console.log(!true)

// Assignment(=, +=, -=)
let a = 5;
a += 2; //a = a + 2 (+2), ans:7
a -= 2; //a = a - 2 (-2), ans:5
console.log(a) //ans:5

// Special Operator(ternary, typeOf)
// Ternary

const age = 18;
const canVote = age>=18 ? "yes":"no";
console.log(canVote)

// typeOf

console.log(typeof('Hello Veeha'))
console.log(typeof(111))