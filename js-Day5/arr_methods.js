// // ARRAY METHODS
// // BASIC ARRAY METHODS
// // PUSH(), POP(), SHIFT(), UNSHIFT()
// const animals = new Array('cat', 'dog', 'elephant');

// animals.unshift('lion');
// console.log(animals); // ['lion', 'cat', 'dog', 'elephant']

// animals.push('donkey');
// console.log(animals); // ['lion', 'cat', 'dog', 'elephant', 'donkey']

// animals.pop();
// console.log(animals); // ['lion', 'cat', 'dog', 'elephant']

// animals.shift();
// console.log(animals); // ['cat', 'dog', 'elephant']

// animals.push('monkey');
// animals.push('tiger');
// animals.push('bear');
// animals.push('zebra');
// animals.push('giraffe');
// console.log(animals); // ['cat', 'dog', 'elephant', 'monkey', 'tiger', 'bear', 'zebra', 'giraffe']

// // ITERATION USING FOR LOOP
// for(let i=0; i<animals.length; i++){
//     console.log(animals[i]);
// }

// // ITERATION USING FOR EACH LOOP
// animals.forEach((animals) => {
//     console.log(animals);
// });


// ADVANCED ARRAY METHODS
// MAP(), FILTER(), REDUCE()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// SQUARE EACH ELEMENT IN THE ARRAY
const sqrs = nums.map(num => num * num);
console.log(sqrs); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// KEEP EVEN NUMBERS
const even = nums.filter(num => num % 2 === 0);
console.log(even); // [2, 4, 6, 8, 10]

// KEEP ODDS ONE RETURNS NEW LIST WITH NEW NUMBERS
const odds = nums.filter(num => num % 2 !== 0);
console.log(odds); // [1, 3, 5, 7, 9] 

// REDUCE 
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 55

// FIND LARGEST NUMBER IN AN ARRAY
function findLargest(arr) {
    if (arr.length == 0) {
        return 'Empty Array!'
    }
    let  largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

const arr = [10,20,30]
console.log(findLargest(arr))