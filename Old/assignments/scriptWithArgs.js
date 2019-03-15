// `process ` is a global variable in node thatgives 
// information about your running program

console.log(process.argv);

//process.argv is an array that contains the following 
//values in order:
// - The full path to yourNode program on your computer
// - The full path to the script file you are running with Node
// - All further values are the arguments to the script

const args = process.argv;
const firstArg = args[2];
const secondArg = args[3];

console.log("First argument:", firstArg)
console.log("Second argument:", secondArg)
console.log("First argument:", args[4])