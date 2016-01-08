/*  1. Statement
    Most JS statement conclude with a semicolon ';'
    'totalGoldCoins' and 'currentGoldCoins': Variables
    '100': Literal Value
    totalGoldCoins = currentGoldCoins + 100;*/

/*  2. Expression
    An expression can be a
    - reference to a variable
    - reference to a value
    - set of variable(s) and value(s) combined with operators
    - The above example has 4 expressions:
    a) currentGoldCoins: Variable expression
    b) 100: Literal Value Expression
    c) currentGoldCoins + 100: Arithmetic Expression
    d) totalGoldCoins = currentGoldCoins + 100: Assigment Expression */

/*  3. Executing a Program
    Myth: JS is interpreted, because your JS code is processed each time it runs
    Truth: The JS engine actually compiles the program on the fly and immediately
           runs the compiled code*/

/*  4. Try It Yourself*/
prevCoins = 50;
newCoins = prevCoins * 2;
console.log(newCoins); // 100

/*  5. Input
    input = prompt("....")
    Note: input will be of type 'string' */
depositedCoins = prompt( "Please enter the number of coins you depositing:");
console.log(depositedCoins);

/*  6. Coercion
    Coercion: Converting between types*/
var strCoins = "108";
// Explicit Coercion
var numCoins = Number(strCoins);
console.log(strCoins); // "108"
console.log(numCoins);  // 108

//  Implicit Coercion
console.log("108" == 108); // true '==' loose equal operators

/*  7. Variables
    Static typing: Type enforcement
    Dynamic typing: aka Weak typing allows a variable to hold any type of data
                    at any given time
    As of ES6, const can be used to define variables with unchanged values*/
const TAX_RATE = 0.06;
TAX_RATE = 0.09; // Rejected
console.log(TAX_RATE); // 0.06

/*  8. Function
    Useful for calling a piece of code multiple times*/
function printDoubleCoins(myCoins) {
  myCoins = myCoins * 2;
  console.log(myCoins + " coins");
}
printDoubleCoins(50);   // 100 coins
printDoubleCoins(100);  // 200 coins
