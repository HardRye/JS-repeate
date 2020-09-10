"use strict";

const products = [
  { id: "id-1", label: "Apples", price: 100, quantity: 50 },
  { id: "id-2", label: "Bananas", price: 120, quantity: 70 },
  { id: "id-3", label: "Lemons", price: 70, quantity: 30 },
];

const users = [
  { id: "id-1", name: "Mango", isActive: true },
  { id: "id-2", name: "Poly", isActive: false },
  { id: "id-3", name: "Ajax", isActive: true },
  { id: "id-4", name: "Chelsey", isActive: false },
];

/*
 * forEach
 */

// for (let i = 0; i < players.length; i += 1) {
//   console.log(players[i]);
// }

// players.forEach((player) => console.log(player));

/*
 * sort
 */

// const numbers = [4, 2, 1, 3, 5, 12];
// numbers.sort(); // mutable
// console.log(numbers);

// const sortedPlayers = [...players];
// sortedPlayers.sort((a, b) => a.rank - b.rank);
// // a - prev element, b - next element
// // (a-b) if >0 then from lowest to highest
// // (b-a) if >0 then from highest to lowest
// console.log(sortedPlayers);

/*
 * custom filter
 */

// const customFilter = (array, callback) => {
//   const fillteredArr = [];
//   for (const el of array) {
//     if (callback(el)) {
//       fillteredArr.push(el);
//     }
//   }
//   return fillteredArr;
// };

// const numbers = [4, 2, 1, 3, 5];
// console.log(customFilter(numbers, (number) => number > 2));
// console.log(customFilter(numbers, (number) => number < 3));

/*
 * custom find
 */

// const customFind = (array, callback) => {
//   for (const el of array) {
//     if (callback(el)) {
//       return el;
//     }
//   }
// };

// const numbers = [4, 1, 2, 3, 5];
// console.log(customFind(numbers, (number) => number < 3));
// console.log(numbers.find((el) => el < 3));

// console.log(customFind(numbers, (number) => number > 5));
// console.log(numbers.find((el) => el > 5));

// console.log(customFind(players, (player) => player.id === "id-2"));
// console.log(players.find((player) => player.id === "id-2"));

/*
 * custom reduce
 */

// const customReduce = (array, callback, initialValue = array[0]) => {
//   let accumulator = initialValue;

//   for (let el of array) {
//     accumulator = callback(accumulator, el);
//   }

//   return accumulator;
// };

// const numbers = [4, 1, 2, 3, 5];
// console.log(customReduce(numbers, (acc, number) => acc + number, 0));

// console.log(
//   numbers.reduce((acc, number) => {
//     return acc + number;
//   })
// );

/*
 * custom reduce on protorype
 * так делать не надо - для примера!!!
 */

// Array.prototype.customReduce = function (callback, initialValue = this[0]) {
//   let accumulator = initialValue;
//   // console.log('this: ', this); // this это массив
//   for (let el of this) {
//     accumulator = callback(accumulator, el);
//   }

//   return accumulator;
// };

// console.log([1, 2, 3].customReduce((acc, num) => acc + num, 0));

/*
 * Chaining
 */

const result = [1, 2, 3, 4, 5]
  .filter((num) => num >= 2)
  .map((el) => el * 2)
  .sort((a, b) => b - a);
console.log(result);

const players = [
  { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
  { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
  { id: "id-3", tag: "Ajax", isOnline: true, rank: 400 },
  { id: "id-4", tag: "Kiwi", isOnline: false, rank: 1000 },
];

const onlineAndSorted = players
  .filter((el) => el.isOnline)
  .sort((a, b) => a.rank - b.rank);
console.log(onlineAndSorted);
