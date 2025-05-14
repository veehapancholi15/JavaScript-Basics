// SIMPLE FUNCTION
function greet(name){
    console.log(`Hello, ${name}!`);
}
greet("Veeha");

// FUNCTION EXPRESSION
const add = function(a, b){
    return a+b;
}
console.log(add(1,2));

// ARROW FUNCTION
const multiply = (a, b) => {
    return a*b;
}
console.log(multiply(23,45));

const area = (len, bre) => {
    return len * bre;
}
console.log(area(20,10));

const square = (a) => {
    return a**2
}
console.log(square(5))

// EXAMPLE
function isPalindrome(str) {
  // Step 1: Normalize the string (convert to lowercase and remove spaces)
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Step 2: Reverse the string
  const reversedStr = normalizedStr.split("").reverse().join("");

  // Step 3: Compare normalized and reversed strings
  return normalizedStr === reversedStr;
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true