// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function newFunction(param, param2) {
  console.log(param);
  console.log(param2);
  return param + param2;
}
newFunction(1, 2);
// invoke the function and pass in two numbers
newFunction(3, 5);
// invoke the function and pass in more than two numbers
newFunction(3, 4, 5);
// invoke the function and pass in only one number
newFunction(4);
// change the function to set default values for the parameters
function newFunction2(value1 = 0, value2 = 0) {
  console.log(value1);
  console.log(value2);
  return value1 + value2;
}
newFunction2();
// again, invoke the function and pass in only one number
newFunction2(2);
// Rest Operator

// add a rest operator to the function's parameters
function functionWithRest(p1, ...rest) {
  console.log(p1, ...rest);
  return console.log;
}
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers.
functionWithRest("p1", "p2", "p3", "p4");
