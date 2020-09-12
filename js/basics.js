// const loginButton = document.querySelector('button[data-action="login"]');
// loginButton.addEventListener("click", (e) => {
//   // console.log(e);
//   // исходный элемент на котором произошло событие
//   console.log("e.target: ", e.target);
//   // элемент на котором произошел обработчик (куда его повесили)
//   console.log("e.currentTarget: ", e.currentTarget);
// });

// document.body.addEventListener("click", (e) => {
//   console.log("e.target: ", e.target);
//   console.log("e.currentTarget: ", e.currentTarget);
// });

//
//
//

// const obj = {
//   x: 5,
//   showX() {
//     console.log(this);
//     console.log(this.x);
//   },
// };

// document.body.addEventListener("click", obj.showX.bind(obj));

const clickerButton = document.querySelector('button[data-action="clicker"]');
let counter = 0;

const clickerFn = () => {
  counter += 1;
  // console.dir(clickerButton);
  clickerButton.textContent = counter;
};

clickerButton.addEventListener("click", clickerFn);
