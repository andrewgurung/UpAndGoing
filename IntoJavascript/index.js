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
