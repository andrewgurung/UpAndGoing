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
