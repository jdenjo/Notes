function factorial(number){

    // termination 
    if (number === 0){
        return 1;
    }
    else{
        return number * factorial (number -1);
    }
       
}

console.log(factorial (6));

console.log(factorial (2));

