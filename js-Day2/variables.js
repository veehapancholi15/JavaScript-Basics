// VAR, LET, CONST DIFFERENCE

// VAR : 
//  REDECLARATION OR UPDATION ALLOWED
//  HOISTING AND INITIALIZATION ARE POSSIBLE BUT ARE UNDEFINED

var a = 'veeha pancholi'
console.log(a) // prints 'a'

console.log(b)
var b = 'malav patel' // gives output as 'undefined' as it is declared after calling it

var a = 'rut purohit'
console.log(a) // value of 'a' is updated from 'veeha pancholi' to 'rut purohit' as redeclaration is allowed here

// LET :
//  REDECLARATION OR UPDATION IS NOT ALLOWED
//  HOISTED BUT NOT INITIALIZED

let m = 'Hello'
console.log(m)

// let m = 'World'
// console.log(m) // output throws error as redeclaration not allowed

let n = 'world' // it will be in temporary dead zone as it is hoisted but it is not called

// CONST :
//  REDECLARATION & REASSIGNMENT NOT ALLOWED
//  USED FOR VALUES THAT DON'T CHANGE SUCH AS CONSTANT VARIABLES
//  MUST INITIALIZED AT TIME OF DECLARATION

const d = 120
// d = 121 // output gives error as cannot change constant value
console.log(d)
// d = 121 // cannot assign the value as we cannot change constant variables

// console.log(f) // output gives error as we cannot access variable before hoisting
const f = 250