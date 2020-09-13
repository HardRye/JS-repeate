// window.addEventListener("scroll", () => {
//   console.log("scrolling");
// });

// console.dir(_); // lodash lib
// console.log(_.throttle); // выполнение функции регулярно и с задержкой
// отлично для скролла

function onScroll() {
  console.log("scrolling throttled");
}

window.addEventListener("scroll", _.throttle(onScroll, 500));

// console.log(_.debounce); // выполнение функции после события с задержкой
// отлично для инпутов (поисковики во время ввода)

document
  .querySelector(".input")
  .addEventListener("input", _.debounce(onInput, 300));

function onInput() {
  console.log(Date.now());
}
