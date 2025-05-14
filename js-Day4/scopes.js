// GLOBAL SCOPE
let globalScope = 'hello world';
if(true){
    console.log(`Inside scope ${globalScope}`);
}
console.log(`Outside scope ${globalScope}`);

// LOCAL SCOPE
function localScope(){
    let localVar = 'hello world';
    console.log(`Inside the function ${localVar}`);
}
localScope();
// console.log(`Outside the function ${localVar}`); // This will throw an error because localVar is not defined outside the function

// BLOCK SCOPE
if(true){
    let blockVar = 'hello world';
    console.log(`Inside the block ${blockVar}`);
}
// console.log(`Outside the block ${blockVar}`); // This will throw an error because blockVar is not defined outside the block  

// IF USED VAR, THEN IT HAVE BOUNDARY LIMIT FOR SCOPE
if(true){
    var val = 'Magic!';
    console.log(val);
}
console.log(val); // var can be called outside the scope

// SHADOWING
// same variable name can be used & updated in the scope
let value = 'hey';
function shadowing(){
    let value = 'there';
    console.log(value);
}
shadowing();
console.log(value);

// LEXICAL SCOPE
// global variable can be accessed inside the function
let globalVar = 'hello';
function lexicalScope(){
    console.log(globalVar);
}
lexicalScope();