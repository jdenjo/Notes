// using iteration
function maximum1 (arr){

    max = arr[0];

    for ( let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

// using recursion
function maximum2(arr2){

    if (arr2.length == 1){
        return arr2[0];
    }
    if(arr2[0] > arr2[1]){
        return maximum2([arr2[0]].concat(arr2.slice(2)))
    }
    else{
        return maximum2([arr2[1]].concat(arr2.slice(2)))
    }  

}

console.time("using iteration");
console.log(maximum1([ 213, 12, 66, 999 ])); //hould return 999
console.log(maximum1([ 1, 2, 3, 11, 3, 6, 5 ])); // should return 11
console.timeEnd("using iteration");

console.time("using recursion");
console.log(maximum2([ 213, 12, 66, 999 ])); //hould return 999
console.log(maximum2([ 1, 2, 3, 11, 3, 6, 5 ])); // should return 11
console.timeEnd("using recursion");
