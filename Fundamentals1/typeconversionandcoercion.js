/**
 * type conversion is explicitly converting one type to another.
 * type coercion is javascript automatically convert types
 */
//type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(typeof inputYear);

console.log(typeof String(23), typeof 23);

//type coercion
//The number 23 is automatically converted to string
console.log(`I am ` + 23 + ' years old');
console.log('23' + 10 + '3');
console.log(10 + 31);

let n = '1' + 1;
n = n - 1;
console.log(n);