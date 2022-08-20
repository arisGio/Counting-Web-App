let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

add.addEventListener("click", function() {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

    if (result > 10) {
        result = 0;
    }

    output.innerText = result;
})

subtract.addEventListener("click", function() {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;

    if (result < 0) {
        result = 0;
    }

    output.innerText = result;
})

// Discussion of functions
function add() {
    alert("hello world")
}

// function with PARAMETERS
function add(number1, number2) { // parameters = placeholders
    return number1 + number2
}

// functions are called by their names, like variables, but include () parenthesis
add(2,4) // 6

// ARROW FUNCTIONS
const add = (number1, number2) => number1 + number2 // equivalent to add() defined above