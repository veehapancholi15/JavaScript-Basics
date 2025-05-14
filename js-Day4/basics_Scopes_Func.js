// SCOPES [GLOBAL, LOCAL, BLOCK]
// SCOPE DETERMINES WHERE VARIBLES & FUNCTIONS CAN BE ACCESSED IN YOUR CODE

// GLOBAL SCOPE = VARIABLES DECLARED OUTSIDE OF ANY FUNCTION ARE GLOBALLY ACCESSIBLE

let globalVar = "I am a global variable";
console.log(globalVar); // Accessible anywhere in the code

// LOCAL SCOPE = VARIABLES DECLARED INSIDE A FUNCTION ARE ONLY ACCESSIBLE WITHIN THAT FUNCTION

function localScopeEx(){
    let localVar = "I am a local variable";
    console.log(localVar);
}
localScopeEx();
// console.log(localVar); // Error: localVar is not defined

// BLOCK SCOPE = VARIABLES DECLARED WITH LET OR CONST INSIDE A BLOCK {} ARE ACCESSIBLE ONLY WITHIN THAT BLOCK

if(true){
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible within this block
}
// console.log(blockVar); // Error: blockVar is not defined

// CONCEPTS = SHADOWING & LEXICAL SCOPE
// SHADOWING = LOCAL VARIABLES CAN SHADOW GLOBAL VARIABLES WITHIN THEIR SCOPE
// LEXICAL SCOPE = FUNCTIONS CAN ACCESS VARIABLES FROM THEIR OUTER SCOPE


// FUNCTIONS
// FUNCTIONS ARE REUSABLE BLOCKS OF CODE THAT PERFORM A SPECIFIC TASK

// FUNCTION DECLARATION
function greet(name){
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// FUNCTION EXPRESSION
const add = function(a, b){
    return a + b;
};
console.log(add(5, 3));

// ARROW FUNCTION
const multiply = (x, y) => x * y;
console.log(multiply(4, 6));

// PARAMETERS AND ARGUMENTS
// PARAMETERS ARE THE VARIABLES IN THE FUNCTION DEFINITION
// ARGUMENTS ARE THE VALUES PASSED DURING A FUNCTION CALL
function calArea(len, wid){
    return len * wid;
}
console.log(calArea(5, 10));

// RETURN STATEMENT
// SENDS VALUE BACK TO CALLER
function square(num){
    return num * num;
}
console.log(square(4));


// PRACTICE PROBLEM SOLVES
// CHECK PALINDROME

function isPalindrome(str){
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true