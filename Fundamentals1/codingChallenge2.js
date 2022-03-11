//  Coding Challenge #2
/**
 * ==========================================================================
 *
 * Your tasks:
 * 1. Print a nice output to the console, saying who has the higher BMI. The message
 * is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 * 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
 * BMI (28.3) is higher than John's (23.9)!"
 *
 * ==========================================================================
 */
//Define mark and john variables.
let markHeight, markMass, johnHeight, johnMass, markHigherBMI = true;

//Set Data
markMass = 95;
markHeight = 1.88;
markBMI = (markMass / (markHeight ** 2));
johnMass = 85;
johnHeight = 1.76;
johnBMI = (johnMass / (johnHeight ** 2));

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}