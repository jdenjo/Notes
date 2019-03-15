function areBalanced(phrase){

    arr = phrase.split("");
    //console.log(arr);

    let count = [];

    for (let i = 0; i < arr.length; i += 1){

        if(arr[i] === "("){
         
            count.push(1);
            //console.log(count);
        }

        if(arr[i] === ")"){
            if (count.pop() === undefined){
                return false;
            }
        }
    }


    //console.log(count);

    if (count.length > 0){
        return "false";
    } 
    else{
        //console.log("got here");
        return "true";
    }

}

console.log(areBalanced("(1 + (2 * 8) ** (3 + 4))")) // returns true
console.log(areBalanced("(4 + 4 + (6 * 9)")) // returns false
console.log(areBalanced("function rob (arg) { return (arg }")) // returns false
console.log(areBalanced("hello )")) // returns false
console.log(areBalanced(")(")) // returns false
