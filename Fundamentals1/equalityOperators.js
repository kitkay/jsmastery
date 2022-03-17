const age = '18';

//If only one line then curly braces not needed.
if (age === 18) console.log(`You just became an adult strict.`);

if (age == 18) console.log(`You just became an real loose.`);

const favorite = Number(prompt("What's your number?"));
//type is a string
console.log(favorite);

if (favorite === 10) {
    console.log(`Cool! Loose number`);
}else if (favorite === 5){
    console.log(`5! Strict number`);
} else {
    console.log(`Strict number`);
}