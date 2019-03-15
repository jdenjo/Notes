function linearSearch(arr, key){

    for (let i = 0; i < arr.length; i++){

        if (arr[i] === key){
            return i;
        }
    }
    return -1;

}



console.log(linearSearch([ 3, 5, 7, 8, 10, 12 ], 10)) // 4
console.log(linearSearch([ 3, 5, 7, 8, 10, 12 ], 3)) // 0
console.log(linearSearch([ 3, 5, 7, 8, 10, 12 ], 78)) // -1
console.log(linearSearch([ 8, 3, 6, 1, 2, 6 ], 6)) // 2