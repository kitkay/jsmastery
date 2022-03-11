/**
 * String literals
 */
const firstName = "Marvin";
const job = "Protechtistor";
const birthYear = 1986;
const year = 2022;

const marvin = "I'm " + firstName + ", a " + (year - birthYear)
    + " years old " + job;

//re-writing the template above using template literals.
const marvinLiterals = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(marvinLiterals);

//Multi-line string ES6
console.log(`String with
multiple
`);