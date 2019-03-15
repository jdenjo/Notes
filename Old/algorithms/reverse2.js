
let result = [];
let i = 1;

function flatten(arr){

    if (Array.isArray(arr[i])){

        flatten(arr);
    }
    else
    {
        result.push(arr[i]);
        flatten(arr.slice(1));
    }

    return result;

}

console.log(flatten([ 1, 2, [3, [4, 5] ] ])); // returns [ 1, 2, 3, 4, 5 ]
// console.log(flatten([ 'a', [ 'b', ['c'] ] ])); // returns [ 'a', 'b', 'c' ]
// console.log(flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10]));
