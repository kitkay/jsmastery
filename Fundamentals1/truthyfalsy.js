/**
 * Truthy and Falsy
 *
 * 0
 * empty sting or " "
 * undefined
 * null
 *  NaN
 * all values above are converted to false
 */

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Marvin'));
console.log(Boolean(''));
console.log(Boolean({}));

//Using coercion with truthy.
//Since money is set to 0 then it is definitely false.
//Adding positive value to money would trigger true.
const money = 43;
if (money) {
    console.log("Dont't spend it all. ;)");
} else {
    console.log(`You should get a job!`);
}

//Another use of truthy- if a variable is defined or not
let height = 0;
if (height) {
    console.log(`Yay height is defined.`);
} else {
    console.log(`Height is UNDEFINED`);
}