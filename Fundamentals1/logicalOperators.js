const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah should dive.');
// } else {
//     console.log('Someone should dive.');
// }

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && shouldDrive);

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able dive.');
} else {
    console.log('Someone else should dive.');
}