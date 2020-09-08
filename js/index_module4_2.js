"use strict";

// const fn = function () {
//   const a = 5;
//   console.log("fn this: ", this);
//   const innerFn = function () {
//     console.log("innerFn this:", this);
//     const innerInnerFn = function () {
//       console.log("innerInnerFn this:", this);
//     };
//     innerInnerFn();
//   };
//   innerFn();
// };

// fn();

//
//===============================================================
//

// const showLabelOutOfProduct = function () {
//   console.log(this);
//   console.log(this.label);
// };

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(this);
//     console.log(this.label);
//   },
//   showLabelOutOfProduct,
// };

// product.showLabel();
// product.showLabelOutOfProduct();

//
//===============================================================
//

// const printLabel = function (callback) {
//   console.log(callback);
//   const label = callback();
//   console.log(`Product label: ${label}`);
// };

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(this);
//     console.log(this.label);
//   },
// };

// printLabel(product.showLabel);
// product.showLabel только ссылка на функцию
// поэтому тут будет this = undefined, а this.label = error, потому что у undefined нет свойства this, undef not an obj

//
//===============================================================
//

// arrow func

// const fn = () => {
//   console.log(this);
// };

// fn(); // window, стрелка игнорирует use strict

//
//===============================================================
//

// const showLabelOutOfProduct = () => {
//   console.log(this);
//   console.log(this.label);
// };
// // showLabelOutOfProduct(); // window obj, undefined

// const product = {
//   label: "Adidas",
//   showLabel() {
//     // obj context in methods as std func
//     console.log(this);
//     console.log(this.label);

//     // const fn = function () {
//     //   console.log(this); // undefined
//     // };
//     const fn = () => {
//       console.log(this); // this родительский, тоесть product
//     };
//     fn();
//   },
//   showLabelArrow: () => {
//     // global context in methods as arrow func
//     console.log(this);
//     console.log(this.label);
//   },
// };
// product.showLabelOutOfProduct = showLabelOutOfProduct;

// product.showLabel();

// product.showLabelOutOfProduct(); // window obj, undefined
// // в стрелочных ф this определяется местом где функция обьявлена, а не вызвана

// product.showLabelArrow(); // window obj, undefined
// // если стрелочную ф сделаь методом объекта, то this у нее берется во время обьявления, тоесть из той области видимости где она была сделана

//
//===============================================================
//

// CALL / APPLY

// const sell = function (product, price) {
//   console.log(`Manager ${this.name} sold ${product} for ${price}`);
//   this.sales += 1;
// };
// const mango = {
//   name: "mango",
//   sales: 10,
//   // sell(product) {
//   //   console.log(`Manager ${this.name} sold ${product}`);
//   //   this.sales += 1;
//   // },
// };
// const poly = {
//   name: "poly",
//   sales: 12,
//   // sell(product) {
//   //   console.log(`Manager ${this.name} sold ${product}`);
//   //   this.sales += 1;
//   // },
// };
// // mango.sell("TV");
// // poly.sell("GPU");
// console.log("Call examples");
// sell.call(mango, "TV", 50);
// sell.call(poly, "GPU", 100);
// sell.call({ name: "Ajax" }, "PS4", 200);
// console.log("Apply examples");
// sell.apply(mango, ["TV", 50]);
// sell.apply(poly, ["GPU", 100]);
// sell.apply({ name: "Ajax" }, ["PS4", 200]);

// BIND

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(this);
//     console.log(this.label);
//     return this.label;
//   },
// };

// const printLabel = function (callback) {
//   const label = callback();
//   console.log(`Product label: ${label}`);
// };

// // printLabel(product.showLabel);
// const boundShowLabel = product.showLabel.bind(product);
// printLabel(boundShowLabel);

// printLabel(product.showLabel.bind(product));

// bind используется когда метод объекта передается как коллбек

//////////////////

{
  // const sell = function (product, price) {
  //   console.log(`Manager ${this.name} sold ${product} for ${price}`);
  //   this.sales += 1;
  // };
  // const mango = {
  //   name: "mango",
  //   sales: 10,
  // };
  // const poly = {
  //   name: "poly",
  //   sales: 12,
  // };
  // const polySell = sell.bind(poly, "TV", 50);
  // polySell();
  // const mangoSell = sell.bind(mango, "GPU", 100);
  // mangoSell();
  // console.log(mango);
  // так лучше не делать
  // bind используется когда метод объекта передается как коллбек
}

// =============================================================

// const Manager = function (name, sales = 0) {
//   // когда вызывается через new создается пустой объект this = {}
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product, price) {
//     console.log(`manager ${this.name} sold ${product} for ${price}`);
//     this.sales += 1;
//   };
//   // return this;
// };

// const mango = new Manager("Mango", 5);
// console.log(mango);
// mango.sell("TV", 50);
// console.log(mango);

// const poly = new Manager("Poly", 10);
// console.log(poly);

// ===========================================================

// const makeSound = function () {
//   console.log(this.sound);
// };

// const dog = {
//   sound: "woof",
// };

// dog.bark = makeSound;

// dog.bark(); //woof

// const fn = function (callback) {
//   callback();
// };
// // fn(dog.bark); // error
// fn(dog.bark.bind(dog)); // необходимо привязать контекст

// ===========================================================
