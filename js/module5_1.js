"use strict";

/*
const Counter = function ({ initialValue = 0, step = 1 }) {
  // this = {}

  this.initialValue = initialValue;
  this.step = step; 

  // return this
};

// [[Call]]
// Counter({});

// [[Construct]]
const counter = new Counter({ initialValue: 10, step: 5 });
console.log(counter);
*/

/*
const Counter = function ({ initialValue = 0, step = 1 }) {
  this.value = initialValue;
  this.step = step;

  this.increment = function () {
    this.value += this.step;
  };
};

const counterA = new Counter({ initialValue: 12, step: 3 });
const counterB = new Counter({ initialValue: 75, step: 15 });

console.log("counterA.value :>> ", counterA.value);
counterA.increment();
counterA.increment();
counterA.increment();
console.log("counterA.value :>> ", counterA.value);
*/

/*

const Counter = function ({ initialValue = 0, step = 1 }) {
  this.value = initialValue;
  this.step = step;

  // this.increment = function () {
  //   this.value += this.step;
  // };
};
console.dir(Counter);

Counter.prototype.increment = function () {
  this.value += this.step;
};
console.dir(Counter);

const counterA = new Counter({ initialValue: 12, step: 3 });
const counterB = new Counter({ initialValue: 75, step: 15 });

console.log("counterA.value :>> ", counterA.value);
counterA.increment();
counterA.increment();
counterA.increment();
console.log("counterA.value :>> ", counterA.value);

*/

{
  // const TodoEditor = function (todos = []) {
  //   this.todos = todos;
  // };
  // TodoEditor.prototype.saveTodo = function (todo) {
  //   this.todos.push(todo);
  // };
  // const todoEditor = new TodoEditor();
  // console.log(todoEditor);
  // todoEditor.saveTodo({ text: "new todo", title: "new title" });
  // console.log(todoEditor);
}

//
// =======================================================
//

// Static Properties / methods

// const Counter = function ({ initialValue = 0, step = 1 }) {
//   this.value = initialValue;
//   this.step = step;
// };
// console.dir(Counter);

// Counter.doStuff = function () {
//   console.log("Doing stuff");
// };

// Counter.prototype.increment = function () {
//   this.value += this.step;
// };
// console.dir(Counter);
