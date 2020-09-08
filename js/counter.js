"use strict";

const Counter = function ({ initialValue = 0, step = 1 }) {
  this.value = initialValue;
  this.step = step;
};

Counter.prototype.increment = function () {
  this.value += this.step;
};

Counter.prototype.decrement = function () {
  this.value -= this.step;
};

const counter = new Counter({ initialValue: 10, step: 5 });

const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const counterValueField = document.querySelector(".js-counter-value");

// console.log(incrBtn);
// console.log(decrBtn);
console.dir(counterValueField);
counterValueField.textContent = counter.value;

incrBtn.addEventListener("click", () => {
  counter.increment();
  // console.log("clicked increment");
  // console.log("counter.value: ", counter.value);
  counterValueField.textContent = counter.value;
});

decrBtn.addEventListener("click", () => {
  counter.decrement();
  counterValueField.textContent = counter.value;
});
