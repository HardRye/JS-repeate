const input = document.querySelector(".input-events-example > input");
const output = document.querySelector(".input-events-example > .output");

// console.log(input);
// console.log(output);

// input.addEventListener("focus", (e) => {
//   console.log("focus event:", e);
// });
// input.addEventListener("blur", (e) => {
//   console.log("blur");
// });

input.addEventListener("input", handleInputChange);

function handleInputChange(e) {
  output.textContent = e.currentTarget.value;
}
