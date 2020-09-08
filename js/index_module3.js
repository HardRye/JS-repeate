"use strict";

// const product = {
//   name: "Wunder Waffles",
//   description: "Lorem ipsum dolor",
//   price: 30,
// };

// console.log(product); // Object
// console.log(product.name); // Wunder Waffles

// const key = "price";
// console.log(product[key]); // 30

// product.price = 50;
// console.log(product.price); // 30

// console.log(product.qwe); // undefined

//==============================================
//==============================================
// SHorthand properties

// const makeProduct = (name, price) => {
//   return {
//     name,
//     price,
//   };
// };

// console.log(makeProduct("banana", 10));

//==============================================
//==============================================

// const key = "name";
// const value = 10;

// const obj = {
//   a: 1,
//   [key]: value,
// };

// // obj[key] = value;

// console.log("obj :>> ", obj);

//==============================================
//==============================================

// const product = {
//   name: "Wunder Waffles",
//   description: "Lorem ipsum dolor",
//   price: 30,
//   // changePrice: function(){}
//   changePrice(newPrice) {
//     // console.log(newPrice);
//     console.log("this :>> ", this);
//     console.log(this.getPrice());
//     this.price = newPrice;
//   },
//   getPrice() {
//     return this.price;
//   },
// };

// product.changePrice(100);

// console.log("product :>> ", product);

//==============================================
//==============================================

// const storage = {
//   items: [
//     { id: "id-1", name: "apples", price: 30 },
//     { id: "id-2", name: "grapes", price: 40 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     this.items.push(product);
//   },
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       // console.log(this.items[i]);
//       const product = this.items[i];
//       if (product.id === id) {
//         console.log("YESSS");
//         this.items.splice(i, 1);
//       }
//     }
//   },
// };

// // console.table(storage.getItems());

// storage.addProduct({ id: "id-3", name: "carrots", price: 20 });

// // console.table(storage.getItems());

// storage.removeProduct("id-2");
// console.table(storage.getItems());

//==============================================
//==============================================

// const product = {
//   name: "waffles",
//   price: 50,
//   quantity: 20,
// };

// // for (const value in product) {
// //   console.log(product[value]);
// // }

// const keys = Object.keys(product);
// console.log(keys);

// const values = Object.values(product);
// console.log(values);

// const entries = Object.entries(product);
// console.log(entries);

//==============================================
//==============================================

// const numbers = [1, 2, 3, 4, 5];

// numbers.lol = "xD";

// console.log(numbers);

// const keys = Object.keys(numbers);
// console.log(keys);

//==============================================
//==============================================
// task 1

// const taskCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// // const fn = function (obj) {
// //   const keys = Object.keys(obj);
// //   let result = keys[0];
// //   for (const name of keys) {
// //     if (obj[result] < obj[name]) {
// //       result = name;
// //     }
// //   }
// //   return result;
// // };

// const fn = function (obj) {
//   const entries = Object.entries(obj);
//   let resultName = entries[0][0];
// //   console.log(entries);
//   for (const empl of entries) {
//     if (obj[resultName] < empl[1]) {
//       resultName = empl[0];
//     }
//   }
//   return resultName;
// };

// const winner = fn(taskCompleted);
// console.log(winner);

//==============================================
//==============================================
// task 2

// const countTotalSalary = function (obj) {
//   const salariesArr = Object.values(obj);
//   let total = 0;
//   if (salariesArr.length === 0) {
//     return total;
//   }
//   for (const salary of salariesArr) {
//     total += salary;
//   }
//   return total;
// };

// console.log(countTotalSalary({}));
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// );

//==============================================
//==============================================
// task 3

// const getAllPropValues = function (arr, prop) {
//   const result = [];
//   for (const user of arr) {
//     if (user[prop]) {
//       result.push(user[prop]);
//     }
//   }
//   return result;
// };

// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissfull" },
//   { name: "Ajax", age: 3, mood: "tired" },
// ];

// const names = getAllPropValues(users, "name");
// const moods = getAllPropValues(users, "mood");
// const actives = getAllPropValues(users, "active");

// console.log(names);
// console.log(moods);
// console.log(actives);

//==============================================
//==============================================
// task 4

// const uploads = [
//   { name: "pdf", percentage: 14 },
//   { name: "psd", percentage: 21 },
//   { name: "mp3", percentage: 3 },
//   { name: "jpg", percentage: 7 },
// ];

// const filterUploadsWithThreshold = function (uploads, threshold) {
//   const result = [];
//   for (const file of uploads) {
//     if (file.percentage > threshold) {
//       result.push(file);
//     }
//   }
//   return result;
// };

// console.log(filterUploadsWithThreshold(uploads, 10));
// console.log(filterUploadsWithThreshold(uploads, 5));

//==============================================
//==============================================
// task 5

// const names = ["radar", "scaner", "droid", "taker", "engine", "fuel tank"];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// // const combine = function (namesArr, pricesArr) {
// //   const result = {};
// //   for (let i = 0; i < namesArr.length; i += 1) {
// //     result[namesArr[i]] = pricesArr[i];
// //   }
// //   return result;
// // };

// const combine = function (namesArr, pricesArr) {
//   const result = [];
//   for (let i = 0; i < namesArr.length; i += 1) {
//     const newObj = { name: namesArr[i], price: pricesArr[i] };
//     result.push(newObj);
//   }
//   return result;
// };

// const products = combine(names, prices);
// console.log(products);

//
//==============================================
//==============================================
//
// enumerable

// const TAKEOUT = 1;
// const COURIER = 2;
// const POST = 3;

// const DeliveryOption = {
//     TAKEOUT: 1,
//     COURIER: 2,
//     POST: 3,
// }

//
//==============================================
//==============================================
//

// // rest
// const { a, ...b } = { a: 1, b: 2, c: 3 };
// console.log(a, b);

// // rest
// const fn = function (...rest) {
//   console.log(rest);
// };
// fn(1, 2, 3);

// // spread
// const x = {
//   y: 5,
//   ...{ g: 6, i: 9 },
// };
// console.log(x);

// // spread
// fn(...[1, 2, 3, 4, 5]);

/*
 * Spread arrays
 */

// const add = (a, b, c) => a + b + c;
// const numbers = [1, 2, 3, -5];
// console.log(add(...numbers));

// console.log(Math.min(1, 2, -3));
// console.log(Math.min(...[-3, -10, 4, 23]));
// console.log(Math.min(...numbers));

// const copyOfNumbers = numbers.slice();
// const copyOfNumbers2 = [...numbers];

// console.log(numbers);
// console.log(copyOfNumbers);
// console.log(copyOfNumbers2);

/*
 * Spread objects
 */

// const objA = { a: 1, b: 2 };
// const objB = { a: 3, c: 4 };

// // no spread
// const objC = Object.assign({}, objA, objB);
// console.log(objC);
// // spread
// const objC2 = { ...objA, ...objB };
// console.log(objC2);

/*
 * rest
 */

// const fn = (...rest) => {
//   console.log(rest);
// };

// fn(1, 2, 3);

/*
 * destructuring
 */

// const user = {
//   name: "mango",
//   room: 24,
//   type: "vip",
//   age: 34,
// };

// const message = `guest ${user.name} comes as ${user.type} in room ${user.room}`;

// console.log("Message1: ", message);

// const {
//   name: userName,
//   room: userRoom,
//   type: userType,
//   qwe = "default parameter if paramater not exists",
//   ...rest
// } = user;

// const message2 = `guest ${userName} comes as ${userType} in room ${userRoom}`;

// console.log("Message2: ", message2);

// console.log("message1 === message2:", message === message2);
// console.log("qwe: ", qwe);
// console.log("rest after destr: ", rest);

// const greeter = (user) => {
//   //   return `guest ${user.name} comes as ${user.type} in room ${user.room}`;
//   const { name: userName, room: userRoom, type: userType, qwe, ...rest } = user;

//   return `guest ${userName} comes as ${userType} in room ${userRoom}`;
// };

// const greeter2 = ({ name: userName, room: userRoom, type: userType }) => {
//   return `guest ${userName} comes as ${userType} in room ${userRoom}`;
// };

// const greeter3 = ({ name: userName, room: userRoom, type: userType } = {}) => {
//   return `guest ${userName} comes as ${userType} in room ${userRoom}`;
// };

// console.log("greeter1: ", greeter(user));
// console.log("greeter2: ", greeter2(user));
// console.log("greeter3: ", greeter3());

/*
 * deep destructuring
 */

// const profile = {
//   name: "mango",
//   email: "mango@mail.com",
//   address: {
//     name: "address city prop",
//     city: " kyiv",
//     country: "ukraine",
//     street: "khreschatyk",
//   },
// };

// const {
//   name,
//   email,
//   address: { city, country, street, name: addressName },
// } = profile;

// console.log("name :>> ", name);
// console.log("email :>> ", email);
// console.log("addressName :>> ", addressName);
// console.log("city :>> ", city);
// console.log("country :>> ", country);
// console.log("street :>> ", street);

//
//====================================================
//====================================================
//

// const tasks = {
//   ann: 30,
//   boris: 50,
//   valera: 99,
// };

// const entries = Object.entries(tasks);

// // for (const entry of entries) {
// //   const [name, value] = entry;
// //   console.log("name :>> ", name);
// //   console.log("value :>> ", value);
// // }

// for (const [name, value] of entries) {
//   console.log("name :>> ", name);
//   console.log("value :>> ", value);
// }

//
//====================================================
//====================================================
//

// const gallery = ({
//     selector,
//     slides = [],
//     delay = 250,
//     activeSlide = 1
// } = {}) => {
//   return;
// };

// gallery({
//   selector: ".gallery",
//   slides: [],
//   delay: 200,
//   activeSlide: 3,
// });

//
//====================================================
//====================================================
//

// const storage = {
//   items: [
//     { id: "id-1", name: "apples", price: 30 },
//     { id: "id-2", name: "grapes", price: 40 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     this.items.push(product);
//   },
//   findProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];
//       if (product.id === id) {
//         return product;
//       }
//     }
//   },
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       // console.log(this.items[i]);
//       const product = this.items[i];
//       if (product.id === id) {
//         // console.log("YESSS");
//         this.items.splice(i, 1);
//         return;
//       }
//     }
//   },
//   changePrice(id, price) {
//     const finded = this.findProduct(id);
//     // if (finded) {
//     //   finded.price = price;
//     // }

//     // guard clause
//     if (!finded) {
//       return;
//     }
//     finded.price = price;
//   },
//   changeName(id, name) {
//     const finded = this.findProduct(id);

//     // if (finded) {
//     //   finded.name = name;
//     // }

//     // guard clause
//     if (!finded) {
//       return;
//     }
//     finded.name = name;
//   },
//   getProductNames() {
//     const names = [];
//     for (const { name } of this.items) {
//       names.push(name);
//     }
//     return names;
//   },
//   filterWithPrice(threshold) {
//     const filtered = [];
//     for (const item of this.items) {
//       if (item.price >= threshold) {
//         filtered.push(item);
//       }
//     }
//     return filtered;
//   },
// };

// console.table(storage.getItems());

// storage.addProduct({ id: "id-3", name: "carrots", price: 20 });
// console.table(storage.getItems());

// storage.removeProduct("id-1");
// console.table(storage.getItems());

// storage.changePrice("id-3", 100);
// console.table(storage.getItems());

// storage.changeName("id-5", "appricot");
// console.table(storage.getItems());

// console.log("names :>> ", storage.getProductNames());

// console.log(storage.filterWithPrice(60));
