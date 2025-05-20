// ARRAYS IN JS
// IT IS COLLECTION OF ELEMENTS IN A SINGLE VARIABLE/MEMORY LOCATION

// EXAMPLE 1
const fruits = ["Apples", "Bananas", "Oranges"];
console.log(typeof(fruits)); // object

// modifying the given array
fruits[0] = "Mangoes";
fruits.push("Grapes");
fruits.pop();
console.log(fruits); // [ 'Mangoes', 'Bananas' 'Oranges' ]

// EXAMPLE 2
const nums = [1, 2, 3, 4, 5];
console.log(nums); // [ 1, 2, 3, 4, 5 ]

// access by index
console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(nums[0]);
console.log(nums[1]);