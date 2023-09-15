console.log("Q1:");
let myArray = [];
console.log(myArray);

console.log("Q2:");
myArray.push("apple");
myArray.push("banana");
myArray.push("cherry");
console.log(myArray);

console.log("Q3:");
console.log(myArray[0]);

console.log("Q4:");
console.log(myArray[myArray.length - 1]);

console.log("Q5:");
myArray.unshift("mango");
console.log(myArray);

console.log("Q6:");
myArray.pop();
console.log(myArray);

console.log("Q7:");
const numbers = [5, 10, 15, 20, 25];
numbers.splice(2, 1);
console.log(numbers);

console.log("Q8:");
function checkLength(array) {
  return array.length;
}
console.log(checkLength(numbers));

//console.log("Q9:");
//const temperatures = [72, 68, 74, 80, 76];
//temperatures.sort();
//console.log(temperatures[temperatures.length - 1]);

console.log("Q9:");
const temperatures = [72, 68, 74, 80, 76];
let max = Math.max(...temperatures);
console.log(`Max value is ${max}`);

console.log("Q10:");
const nums = ["apple", "banana", "cherry"];
console.log(nums.includes("banana"));
