/**
 * All about operators BASICS
 *
 * - allows us to transform values or combine multiple values
 * and to work with all kind of values
 */

//Math operators
let curyear = 2022;

const ageMarvin = (curyear - 1986);
const ageKay = (curyear - 1988);

console.log(ageMarvin, ageKay);
//2 to the power of 3
console.log(2**3);

//concatenate
const nameOne = "Marvin";
const lastName = "Abante";
console.log(nameOne + " " + lastName);

//Assignment operators
//or Equal operator - setting a value for the variable.
let x = 10 + 5;
x += 10;    //Simple means existing value of X plus the new value.
x *= 4; //Simple existing value of X multiplied by 4.
console.log(x);

//Comparison operators. >, <, >=, <=
console.log(ageMarvin > ageKay);
console.log(ageMarvin >= 15);
console.log(ageMarvin <= 15);

const isFullAge = (ageMarvin > 15);
console.log(isFullAge);