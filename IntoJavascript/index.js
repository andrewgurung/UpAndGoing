/* Value and Types
  1. string
  2. number
  3. boolean
  4. object
  5. null
  6. undefined
  7. symbol (ES6) */

var sample;
console.log(typeof(sample)); // undefined

sample = "Gurung";
console.log(typeof(sample)); // string

sample = null;
console.log(typeof(sample)); // object [Weird part]

sample = { house: "Stark" };
console.log(typeof(sample)); // object

sample = 19;
console.log(typeof(sample)); // number

sample = undefined;
console.log(typeof(sample)); // undefined


/* Objects: Compound values with named properties and values of any type
  Accessed via:
    1. dot notation
    2. bracket notation
*/
var halfMan = {
  name: "Tyrion Lannister",
  nickName: "halfMan",
  age: 35
};
console.log(halfMan.age); // 35
console.log(halfMan["name"]); // Tyrion Lannister


/* Arrays are objects with holds values in numerically indexed positions
   Since array is an object, it contains a default length property*/
var complex_Array = ['Tyrion', 8.9, true];
console.log(complex_Array[0]); // Tyrion
console.log(complex_Array[1]); // 8.9
console.log(complex_Array[2]); // true
console.log(complex_Array.length); // 3

/* Functions: Subtype of object */
function goldCoins() {
	return 100;
}
// Functions are subtype of objects
// So in limited cases, we can have function object properties
goldCoins.owner = "Lannisters";

console.log(typeof goldCoins); 		 // function
console.log(typeof goldCoins());     // number
console.log(typeof goldCoins.owner); // string

// Coercion
var a = "42";
var b = Number( a );

// Equality
// "==" checks for value equality
// "===" checks for both value and type equality. aka strict equality
console.log(a == b);  // true ()
console.log(a === b); // false

// Best Practice
// Whether to use == or ===
// 1. If either value (aka side) in a comparison could be true, false, 0, "", []
//    use ===
// 2. Else it is safe to use ==

/* Variables
  Identifier must start with a-z, A-Z, $, or _
  It can then contain any of those characters plus the numerals 0-9 */

/* Hoisting
   When a var declaration is conceptually "moved" to the top of its enclosing scope
   Good: Function hoisting
   Bad: Variable hoisting
   - */
var silverCoins = 100;

//Works because displaySilverCoins() declaration is hoisted
displaySilverCoins(); // 200

function displaySilverCoins() {
  silverCoins = 200;
  console.log(silverCoins);
  var silverCoins; // declaration is hoisted to top of displaySilverCoins()
}
console.log(silverCoins); // 100

/* Nested Scope:
  - A variable is available in that scope as well as any inner scope
  - Trying to access a variable in a restricted scope: ReferenceError
  - Trying to access an undeclared variable will create a globally scoped variable or Error (for "strict mode")
*/
function grandParent() {
  var grandParentAge = 65;

  function parent() {
    var parentAge = 40;

    function child() {
      var childAge = 18;
      console.log(grandParentAge, parentAge, childAge); // 65 40 18
    }

    child();
    console.log(grandParentAge, parentAge); // 65 40
  }

  parent();
  console.log(grandParentAge); // 65
  /* console.log(parentAge);
     ReferenceError: parentAge is not defined */
};
grandParent();


/* Trying to access an undeclared variable will create a
   globally scoped variable or Error (for "strict mode")
   Best practice: Always formally declare your variables! */
function undeclaredVariable() {
  sample = 2;
}
undeclaredVariable();
// sample is globally accessible outside of function undeclaredVariable()
console.log(sample); // 2


/* ES6 lets you declare block scoped variables with the 'let' keyword
function printAll() {
    var a = 1;
    if (a >= 1) {
        let b = 5;
        while (b <= 10) {
          console.log(b);
          b++;
        }
    }
}
printAll(); */

/* ES5 added "strict mode"
  - Tightens rules
  - Optimzed code for JS engine
  - Can be opt for an individual function or entire file

1. Function strict mode
function foo() {
  "use strict";
  // this code is in strict mode
  function bar() {
    // this code is in strict mode
  }
}
//this code is not in strict mode

2. File strict mode
"use strict";
function foo() {
    // this code is strict mode
    function bar() {
        // this code is strict mode
    }
}
// this code is strict mode

3. Strict mode disallows implicit auto-global variable declaration by omitting 'var'
function foo() {
  "use strict"; // turn on strict mode
  a = 10;       // `var` missing, ReferenceError
}
foo(); */


//  Function as values
//  1. function name: anonymous
//     variable name: anon1
//     - Not preferred but extremely common
var anon1 = function() { };
// 2. function name: hideMe
//    variable name: anon2
//    - Preferred more
var anon2 = function hideMe() { };


// Immediately Invoked Function Expressions (IIFEs)
//  - outer (..) surrounds function Expression (function IIFE(){ })
//    so that JS doesn't treat it as function declaration
//  - Followed by (); to invoke the function expression immediately
//  - Variables declared inside of IIFE will be function scoped
var printMe = "Global";
(function iife(){
  var printMe = "IIFE"; // 'printMe' variable is function scoped
  console.log(printMe);
})(); // IIFE
console.log(printMe); // Global

/* Similar to IIFE
function iife() { } // function expression
iife(); // function execution */

var iifeAge = (function iife2(){
  return 100;
})();
console.log(iifeAge); // 100


//  Closure
//  - A way to remember a function's scope (variables) even after function
//    has finished running
function advantage(extra) {
  function add(input) {
    return input + extra; // Closure on 'extra'
  }
  return add; // Return modified function with closure on 'extra'
}

var advantage10 = advantage(10); // Reference to add() which has closure on 10
var advantage50 = advantage(50); // Reference to add() which has closure on 50

console.log(advantage10(100)); // 110 (100 + 10)
console.log(advantage50(100)); // 150 (100 + 50)


/*  Modules
    - Most common use of closure in JS is the module pattern
    - Private implementation details (variables and functions) hidden from outside
    - Public APIs accessible from outside */
function User() {
  // private variable
  var username, password;

  // private function
  function doLogin(user, pass) {
    username = user;
    password = pass;
  }

  // object with one property which references to inner function 'doLogin'
  var publicAPI = {
    login: doLogin
  };

  // expose public API
  return publicAPI;
}

// Doesn't require new User() as in other object oriented programming
// Returns a new copy each time
// Even after completing User(), we still have access to username and password variable
var nedStark = User();
nedStark.login("Ned Stark", "WinterIsComing");

var jonSnow = User(); // returns a new copy each time


/*  this identifier
    To understand what 'this' points to, you have to examine how the function was called
    In Javascript there are 4 ways of setting 'this'
    1) function call
       In non strict mode, this = global object
       In strict mode, this = undefined
       Eg: thisIdentifier();

    2) method invocation
       this = object that contains the method
       Eg: lannister.displayHouseName();

    3) call() method to invoke
       this = object which is passed to call() as a parameter
       Eg: displayHouseName.call(stark);

    4) new operator
       this = brand new empty object
       Eg: new displayHouseName(); */
function displayHouseName() {
  console.log(this.houseName);
}
var houseName = "Unnamed House";

var lannister = {
  houseName: "Lannister",
  displayHouseName: displayHouseName
};

var stark = {
  houseName: "Stark"
};

displayHouseName();           // Unnamed House
lannister.displayHouseName(); // Lannister
displayHouseName.call(stark); // Stark
new displayHouseName();       // undefined
