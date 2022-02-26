const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button")!;

function sum(x: number, y: number) {
  return x + y;
}

button.addEventListener("click", () => {
  console.log(sum(Number(input1.value), Number(input2.value)));
});
