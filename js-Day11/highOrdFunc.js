const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sqr = nums.map(num => num * num);
const odd = nums.filter(num => num%2 !== 0);
const sums = nums.reduce((acc, num) => acc + num, 0);
const prod = nums.reduce((acc, num) => acc * num, 1);

console.log('Square of numbers: ', sqr);
console.log('Odd numbers: ', odd);
console.log('Sum of numbers: ', sums);
console.log('Product of numbers: ', prod);

const students = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 22},
    {name: 'Jim', age: 19},
    {name: 'Jack', age: 21}
];

const ageFactor = students.filter(stud => stud.age > 20);
const names = students.map(names => names.name);
const all = students.filter((acc, names, index) => {
    return index == 0 ? names : acc + ',' + names;
}, ' ');
console.log(all);
console.log(names);
console.log(ageFactor);