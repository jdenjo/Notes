
function binarySearch(arr, key){
    
    console.log (arr);

    if (arr.length == 1){
        console.log(arr[1])
        return arr[1];
        
    }

    arr1 = arr.slice(arr.length / 2);
    arr2 = arr.slice(0, (arr.length / 2));
    //console.log(arr1 + " vs: " + arr2);

    if (arr1[arr1.length-1] < arr2[arr.length-1]){
        return binarySearch(arr1, key);
    }
    else{
        return binarySearch(arr2, key);
    }
    
}
 
    //console.log(arr1);
    //console.log(arr2);
    

console.log(binarySearch([ 3, 5, 7, 8, 10, 12 ], 10)) // 4