
// the first 2 values of `process.argv` are the arguments
// to the script therefore we skip them
const mood = process.argv[2]

// Code wrapped by an opening brace and closing 
// brace is called a block

if (mood === "happy"){
    console.log("Yay!");
}  else if(mood === "angry") {
    console.log("calm down");
} 
else {
    // in an if-statement, using `else` keyword allows us 
    // to provide  default block that will execute if the
    // condition isn't true
    console.log("ok");
}