const nums = [1, 2, 3, 4, 5];
let square = nums.map(num => num * num);
let even = nums.filter(num => num % 2 === 0);
let sum = nums.reduce((acc, num) => acc + num, 0);
let condition = nums.filter(num => num > 3);
let product = nums.reduce((acc, num) => acc * num, 1);
console.log(square); // [ 1, 4, 9, 16, 25 ]
console.log(even); // [ 2, 4 ]
console.log(sum); // 15
console.log(condition); // [ 4, 5 ]
console.log(product); // 120