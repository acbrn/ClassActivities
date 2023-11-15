// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "noonish";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Hello mortals it is truly ${timeOfDay}!`;

// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVar;

// Print the new variable and its type
// What type should we expect?
console.log(newVar, typeof newVar);
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newVar = null;
// Print the variable and its type again
// What type should we expect?
console.log(newVar, typeof newVar);
// Try to print a variable that does not exist
  //console.log (oldVar); Comment out to make the last request work.
// Print "greeting" again
// Will this line run?
console.log(greeting);
