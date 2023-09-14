/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/
console.log("Q1");
function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

let array = [1, 2];
let x = isArrayLengthOdd(array);
console.log(x);

let array1 = [1, 2, 3];
let y = isArrayLengthOdd(array1);
console.log(y);

/**
    
    - isArrayLengthEven(numbers):
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */
console.log("Q2");
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let arrayz = [1, 2];
let z = isArrayLengthEven(arrayz);
console.log(z);

let array5 = [1, 2, 3];
let w = isArrayLengthEven(array5);
console.log(w);

/**
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */
console.log("Q3");
function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}

let zz = addLailaToArray(["Mshary", "Hasan"]);
console.log(zz);

/**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */
console.log("Q4");
function eliminateTeam(teams) {
  let xyz = teams.pop();
  return xyz;
}
let myArray = [1, 2, 9999, 4, 5];
let zzz = eliminateTeam(myArray);
console.log(zzz);

/**
    
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new array that's the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */
console.log("Q5");
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 == 0) {
    //second half
    return fruits.slice(fruits.length / 2);
  } else {
    return [];
  }
}
console.log(secondHalfOfArrayIfItIsEven([1, 2, 3, 4, 5, 6]));
console.log(secondHalfOfArrayIfItIsEven([1, 2, 3]));

/**
    
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */
console.log("Q6");
function youGottaCalmDown(shout) {
  let exclamation = shout.indexOf("!");
  if (exclamation == -1) {
    console.log(shout);
    return shout;
  } else {
    return shout.slice(0, exclamation + 1);
  }
}

let foo = youGottaCalmDown(`Hello!!!!!!!!!!!!!!!!!!!!`);
console.log(foo);
