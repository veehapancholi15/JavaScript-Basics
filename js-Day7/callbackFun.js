// EXAMPLE 1
function callbackFun(a, callback){
    return console.log(callback(a));
}
callbackFun(10, (x)=>x*x); // calling the function

// EXAMPLE 2
function add(num1, num2, callback){
    return console.log(callback(num1, num2));
}
add(10,20, (num1, num2)=>num1 + num2); // calling the function