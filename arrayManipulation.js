let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log("After push:", fruits);
fruits.pop();
console.log("After pop:", fruits);

let numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers);

let nums = [3, 1, 5, 2, 4];
let doubledNumbers = nums.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);
let evenNumbers = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);
