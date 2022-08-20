// note: variables can contain references to HTML elements
// we can save the references to our buttons in variables

let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

console.log(add, subtract);

let addition1 = 1 + 1 // 2
let addition2 = 1 + "1" // "11" cast to string and then string concatenation
let addition3 = "hello" + " world" // "hello world"

let subtraction = 10 - 9 // 1

let multiplication = 2 * 2 // 4

let division = 4 / 2 // 2

let if_true = 2 + 4 == 6 // true, if_true = (2 + 4 == 6) -> if_true = true // boolean
let if_false = 5 + 6 == 10 // false, now expression (5 + 6 == 10) evaluates to false

// there are othre operators too but we will not go through all of them