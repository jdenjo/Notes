// JS: Promise

// To create a promise objects, use the Promise constructor.
// It takes one argument that is a callback named "resolver"
// (sometimes "executor")

//            ð the resolver
new Promise(() => {});

new Promise((resolve, reject) => {
  resolve("My Promise Value");
});
// The resolver callback is passed two arguments:
// - The first is a function named "resolve".
//   When called, it transitions the promise from the
//   "pending" state to the "resolved" state. It takes
//   a single argument which becomes the promise's value.

new Promise((resolve, reject) => {
  reject(new Error("My Error Message"));
});

// The resolver callback is passed two arguments:
// - The second is a function named "reject".
//   When called, it transitions the promise from the
//   "pending" state to the "rejected" state. It takes
//   a single argument which becomes the promise's value.

new Promise((resolve, reject) => {
  // The first of "resolve" or "reject" to be called is
  // the only one that matters. All further calls to these
  // functions will be ignored by the promises.
  resolve("My first value");
  resolve("My second value");
  reject("NOOOOOOOOO!");
});

// Returning a Promise from a Function

// Demo: Flipping Coins
function flipCoin() {
  return new Promise((resolve, reject) => {
    // When returning a Promise, write your asynchronous
    // code inside the Promise's resolver callback.

    const coinFace = ["HEADS", "TAILS"][Math.floor(Math.random() * 2)];
    resolve(coinFace);
  });
}

// Demo: throwCoin

function throwCoin() {
  return new Promise((resolve, reject) => {
    // When returning a Promise, write your asynchronous
    // code inside the Promise's resolver callback.

    setTimeout(() => {
      const coinFace = ["HEADS", "TAILS"][Math.floor(Math.random() * 2)];
      resolve(coinFace);
    }, 1000 + Math.floor(Math.random() * 3000));

    setTimeout(() => {
      reject(new Error("The coin was thrown too far"));
    }, 3000);
  });
}
