// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let firstVar = "I'm a string!";
let secondVar = 48;
let thirdVar = false;
let fourthVar;
let fifthVar = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof firstVar)
console.log(typeof secondVar)
console.log(typeof thirdVar)
console.log(typeof fourthVar)
console.log(typeof fifthVar)
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let tempVar = `Hey look ${firstVar} and I have ${secondVar} characters!`
console.log(tempVar)
// reassign the value of the variable that references "null"
fifthVar = "defin not null!"
// print the value and its type
console.log (fifthVar, typeof fifthVar)
// print a variable that causes a ReferenceError
    //console.log (anotherVar)
let anotherVar = "ending!"
// alter the previous line to no longer cause a ReferenceError
console.log(anotherVar);
