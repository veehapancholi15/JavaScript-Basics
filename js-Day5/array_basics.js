// ARRAYS
// ARRAYS ARE DATA STRUCTURES THAT CAN STORE MULTIPLE VALUES IN A SINGLE VARIABLE
// THEY ARE DEFINED USING SQUARE BRACKETS []
const fruits = ['apple', 'banana', 'orange'];

// ACCESSING AND MODIFYING ARRAYS
// ACCESSING ELEMENTS USING INDEX
console.log(fruits[0]); // 'apple'

// MODIFYING ELEMENTS
fruits[1] = 'grape';
console.log(fruits); // ['apple', 'grape', 'orange']


// ARRAY METHODS
// BASIC ARRAY METHODS

// PUSH() = ADDS AN ELEMENT TO THE END OF AN ARRAY
fruits.push('blueberry');
console.log(fruits);

// POP() = REMOVES THE LAST ELEMENT FROM AN ARRAY
fruits.pop();
console.log(fruits);

// SHIFT() = REMOVES THE FIRST ELEMENT FROM AN ARRAY
fruits.shift();
console.log(fruits);

// UNSHIFT() = ADDS AN ELEMENT TO THE BEGINNING OF AN ARRAY
fruits.unshift('blueberry');
console.log(fruits);

// ADVANCED ARRAY METHODS
// MAP() = TRANSFORMS EACH ELEMENT IN AN ARRAY AND RETURNS A NEW ARRAY
const nums = [1,2,3,4];
const sqrs = nums.map(nums => nums * nums);
console.log(sqrs); // [1, 4, 9, 16]

// FILTER() = CREATES A NEW ARRAY WITH ELEMENTS THAT MEETS A CONDITION
const even = nums.filter(nums => nums % 2 === 0);
console.log(even); // [2, 4]

// REDUCE() = REDUCES AN ARRAY TO A SINGLE VALUE
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


// ITERATING OVER ARRAYS
// FOR LOOP
const colors = ['red', 'green', 'blue'];
for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
}

// FOR EACH LOOP
colors.forEach((color) => {
    console.log(color);
});


// PRACTICAL EXAMPLE
// LARGEST NUMBER IN AN ARRAY

function findLargestNumber(arr) {
    if(arr.length === 0){
        return "Array is empty";
    }

    let largest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

const numbers = [3, 5, 7, 2, 8];
console.log(`The largest number is: ${findLargestNumber(numbers)}`); // The largest number is: 8