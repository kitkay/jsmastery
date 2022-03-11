/**
 * if else statements
 */
const age = 17;
const yearsLeft = (18 - age);
const birthYear = 1986;
let century;

if (age >= 18) {
    console.log('Marvin can have a driving license 🚗.');
} else {
    console.log(`Marvin cannot have license yet. ${yearsLeft} years need.`);
}

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);