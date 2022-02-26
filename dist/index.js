"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("button");
function sum(x, y) {
    return x + y;
}
button.addEventListener("click", () => {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
