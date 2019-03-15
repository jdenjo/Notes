// JS: Higher-Order Functions
console.log('JS: Higher-Order Functions');

const myString = 'string';
const myOtherString = myString;

// functions are a base type
// they can be assigned, re-assigned and passed as
// arguments to other functions
// As well as property values -> These are called methods
function testFn() {
  console.log('This is the testFn');
  return 1;
}
const myFnVar = testFn; // We did not yet call testFn

// Arrow Functions

// This is how you delcare an arrow function
const sleep = () => {
  return 'Zzzzzz....';
};
