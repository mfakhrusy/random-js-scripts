/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...numbers) {
  const sum = numbers.reduce((previous, current) => (previous + current), 0);
  return sum/numbers.length ? sum/numbers.length : 0;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());