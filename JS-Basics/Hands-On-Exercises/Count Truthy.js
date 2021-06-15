// Write a function that returns the count of an array element showing truthy values only
// Falsy values includes null, undefined, 0, '', false and NaN
const array = ["", 0, false, 4, 7, 1, 8];
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log(countTruthy(array)); // returns 4 since there are only 4 truthy values in our array
