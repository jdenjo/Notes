// JS: Constructors & Prototypes

console.log('This is the JS file');
const object = { a: 1, b: 2, c: 3 };

// M E T H O D S
// DEMO: ArrayExtras

// This function is just a regular function.
// It is NOT a method.
function firstEl(arr) {
  return arr[0];
}

const fn2 = function() {
  return 2;
};

const ArrayExtras = {
  // A **method** is a property of an object that's
  // been assigned a function as its value.
  // Think of a method as a function that is owned by an object.
  last: function(arr) {
    return arr[arr.length - 1];
  },
  // TO create a method, you can also assign an existing function
  // to a property of an object
  first: firstEl,
  bla: fn2,
  // The following method was written suing short-hand syntax.
  take(arr, n) {
    return arr.slice(0, n);
  },
  // The above is exactly equivalent to the method written below:
  // take: function take (arr, n) {
  //   return arr.slice(0, n);
  // }

  // Exercise: toObject
  toObject(arr) {
    const newObj = {};

    for (let pair of arr) {
      newObj[pair[0]] = pair[1];
    }

    return newObj;
  },
};

// Keyword "this"
// Demo: A Counter
if (false) {
  const counter = {
    count: 0,
    set(n) {
      // count = n;
      // Use `this` to get the object that owns a method.
      // In this method, `this` will refer to the object assigned
      // to `counter`.
      this.count = n;
    },
    inc() {
      this.count = 1;
    },
    dec() {
      this.count -= 1;
    },
    now() {
      return this.count;
    },
  };
}

// Exercise: Configurable Steps
if (false) {
  const counter = {
    count: 0,
    step: 1,
    set(n) {
      // count = n;
      // Use `this` to get the object that owns a method.
      // In this method, `this` will refer to the object assigned
      // to `counter`.
      this.count = n;
    },
    inc() {
      // You are able to call other methods that belong to the
      // same object within a method using `this`.
      const current = this.now();
      this.count = current + this.step;
    },
    dec() {
      this.count -= this.step;
    },
    now() {
      return this.count;
    },
    setStep(newStep) {
      this.step = newStep;
    },
  };

  counter.setStep(5);
  counter.inc(); // counter.count === 5;
  counter.inc(); // counter.count === 10;
  counter.setStep(7);
  counter.dec(); // counter.count === 3;
}

// Exercise: Chainable Counter
const counter = {
  count: 0,
  step: 1,
  set(n) {
    // count = n;
    // Use `this` to get the object that owns a method.
    // In this method, `this` will refer to the object assigned
    // to `counter`.
    this.count = n;
  },
  inc() {
    // You are able to call other methods that belong to the
    // same object within a method using `this`.
    const current = this.now();
    this.count = current + this.step;
    return this;
  },
  dec() {
    this.count -= this.step;
    return this;
  },
  now() {
    return this.count;
  },
  setStep(newStep) {
    this.step = newStep;
  },
};
// When counter.inc() has no return value....
const val = counter.inc();
val === undefined;
// val.dec(); // This will throw an error

// When counter.inc() returns `this`.....
const val1 = counter.inc();
val1 === counter;
val1.dec();
counter
  .inc()
  .inc()
  .dec()
  .now();

// Strange "this" behaviour
// Demo: Can

console.log('Inside script:', this);
// `this` outside of a method will be the global
// `window` object in the browser
// or the global `global` object in Node.

// These objects contain a host of properties related to
// the platforms they belong to.

// Any properties on these objects are accessible as
// global variables
myVar = 10;
window.myVar === 10;

function whatsMyThis() {
  return this;
}
window.whatsMyThis() === whatsMyThis();

console.log('whatsMyThis():', whatsMyThis());
window.console.log('This is the same');
// function myFunc() {
//   let myOTherVar = 10;
// }

const can = {
  taloupe: 'hello!',
  touchThis() {
    return this;
  },
  whatsMyThis: window.whatsMyThis,
};

// We say that `this` is dynamic.
// In other words, it is not determined by its placement
// in the code, but instead, by where it is
// at the time at which it is called.
console.log('can.touchThis():', can.touchThis());
console.log('can.whatsMyThis():', can.whatsMyThis());

if (false) {
  const obj = {
    test() {
      return 'test';
    },
  };

  const obj2 = {
    method() {
      obj.test();
    },
  };
}

const cant = {
  cantsProperty: 'Things!',
  touchThis: can.touchThis,
};

console.log('cant.touchThis():', cant.touchThis());
cant.cantsProperty;
// can??
// window??
// Actually it refers to `cant`

can.touchThis(); // This `this` still is `can`

lastTest = cant.touchThis;
console.log('lastTest():', lastTest());
console.log('lastTest():', window.lastTest());
// cant??
// can ??
// window?? <--- This is the right `this`

//  C O N S T R U C T O R S
const varName = {
  /*...*/
}; // Object literal notation

function Doggo(name, age) {
  // console.log('this inside Doggo:', this);
  // When a function is used as a constructor (using keyword
  // `new`), its `this` is a new empty object that is
  // named after the constructor.

  // We use constructor functions to build objects.
  // We build objects by assigning values to `this`
  // within the constructor.
  this.name = name;
  this.age = age;

  // Dont add methods here! use the prototype
  // this.sleep = function() {
  //   return `${this.name} is sleeping ZZZZ....`;
  // };

  // return 'This is a string';
}
// Use a function as a constructor by prefixing with
// `new` keyword.
// When used this way, an **instance of the constructor**
//  is return
const sonicSam = new Doggo('SonicSam', 10);
const jivingJim = new Doggo('Jiving Jim', 11);

// This is BAD!
// This does not return an instance of the Doggo constructor
// This treats Doggo as a regular function
// and returns undefined implicity
// or 'This is a string' if line 248 were uncommented
const maybeDoggo = Doggo('New Name', 12);

// P R O T O T Y P E

Doggo.prototype.bark = function() {
  return `${this.name} barks "Bork bork bork!`;
};

// Dont do this! Do what is written above using the prototype
sonicSam.run = function() {};
jivingJim.run = function() {};

sonicSam.__proto__; // Returns the prototype of Doggo instances
Doggo.__proto__; // Return the prototype of Function instances
Function; // The Function constructor

Doggo.prototype === Doggo.__proto__; //?????
// This is false!!!!

sonicSam.__proto__ === Doggo.prototype; // true
sonicSam.__proto__ === Doggo.__proto__; // false!

const obj = {};

function newFn() {}



function Counter(){

    this.count = 0;

}

Counter.prototype.inc = function(){
    this.count += 1; 
} 

Counter.prototype.dec = function(){
    this.count -= 1; 
} 

Counter.prototype.set = function(num){
    this.count = num; 
} 

Counter.prototype.now = function(){
    return this.count;
}

