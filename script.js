let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let output = document.querySelector("#output");

let count = Number(output.innerText);

function changeCounter(button) {
    if (button == add) {
        count++;
    } else if (button == subtract) {
        if (count > 0) {
            count--;
        }
    }
    output.innerText = count;
}