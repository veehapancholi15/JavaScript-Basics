const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// methods

nums.push(11); // add to the end
nums.pop(); // remove from the end
nums.unshift(0); // add to the beginning
nums.shift(); // remove from the beginning
console.log(nums.splice(1,8)); // remove from the middle
console.log(nums.indexOf(1)); // find index of an element
console.log(nums);