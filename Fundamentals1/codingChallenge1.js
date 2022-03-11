//////////////////////////
//  Coding Challenge #1
/**
 * Mark and John are trying to compare their BMI (Body Mass Index),
 *      which is calculated using the formula:
 * BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
 *
 * ==========================================================================
 *
 * Your tasks:
 * 1. Store Mark's and John's mass and height in variables
 * 2. Calculate both their BMIs using the formula (you can even implement both versions)
 * 3. Create a Boolean variable 'markHigherBMI' containing information about
 *      whether Mark has a higher BMI than John
 *
 * ==========================================================================
 *
 * Test data:
 * Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
 * Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
 */

//Defining default variables.
let mass, height;
//Define mark and john variables.
let markHeight, markMass, johnHeight, johnMass, markHigherBMI = true;

//Set Data
markMass = 95;
markHeight = 1.88;
markBMI = (markMass / (markHeight ** 2));
johnMass = 85;
johnHeight = 1.76;
johnBMI = (johnMass / (johnHeight ** 2));
markHigherBMI = markBMI > johnBMI;

console.log('Mark\'s BMI: [' + markBMI + '] \n', 'John\'s BMI: [' + johnBMI + '] \n');
console.log('Mark has greater BMI: ' + markHigherBMI);