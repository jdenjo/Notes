function factorialRecursive(n) {
    if(n === 0) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  function factorialLoop(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // with `time` and `timeEnd` you should use the same string for starting with `time` and 
  // stopping with `timeEnd`
  // you put the code you wnt to Benchmark in between the two
  console.time('Factorial Loop');
  
  for(let x = 0; x <= 1e7; x++) {
    factorialLoop(10);
  }
  
  console.timeEnd('Factorial Loop');
  
  console.time('Factorial Recursion');
  
  for(let x = 0; x <= 1e7; x++) {
    factorialRecursive(10);
  }
  
  console.timeEnd('Factorial Recursion');