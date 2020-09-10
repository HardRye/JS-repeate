"use strict";

/*
 * Иммутабельность
 */

{
  // const storage = {
  //   _items: [{ label: "item-1" }, { label: "item-2" }],
  //   get items() {
  //     return this._items;
  //   },
  //   addItem(item) {
  //     // this._items.push(item);
  //     this._items = [...this._items, item];
  //   },
  // };
  // console.log(storage.items);
  // storage.addItem({ label: "item-3" });
  // console.log(storage.items);
}

/*
 * Перебирающие методы массивов
 * лежат на Object.prototype т.к. массив частный случай объекта
 * array.method(callbackFn)
 *
 * most of callback fn arguments: currentValue, index, initialArray
 * currentValue - obligatory
 * index, initialArray - not obligatory
 *
 * method reduce has 4 arguments: previousValue (accumulator), currentValue, index, initialArray
 * previousValue (accumulator), currentValue - obligatory
 * index, initialArray - not obligatory
 *
 * array.reduce(callbackFn, initialAccumulatorValue)
 */

const numbers = [1, 2, 3, 4, 5, 6];
const products = [
  { id: "id-1", label: "Apples", price: 100, quantity: 50 },
  { id: "id-2", label: "Bananas", price: 120, quantity: 70 },
  { id: "id-3", label: "Oranges", price: 70, quantity: 30 },
];
const users = [
  { id: "id-1", name: "Mango", isActive: true },
  { id: "id-2", name: "Poly", isActive: false },
  { id: "id-3", name: "Ajax", isActive: true },
  { id: "id-4", name: "Chelsey", isActive: false },
  { id: "id-5", name: "Bravo", isActive: true },
];

/*
 * Map
 */
{
  // const doubled = numbers.map((number) => number * 2);
  // console.log(numbers);
  // console.log(doubled);
  /////////////////////////////////
  // const labels = products.map((product) => product.label);
  // console.log(labels);
  //-----------------
  //   const getLabels = (products) => products.map((product) => product.label);
  // const labels = getLabels(products);
  // console.log(labels);
  /////////////////////////////////
  // const productsWithUpdatedPrices = products.map((product) => {
  //   return {
  //     ...product,
  //     price: Math.round(product.price * 1.1, 0),
  //   };
  // });
  // console.log(products);
  // console.log(productsWithUpdatedPrices);
  //----------------------------
  // const updateProductsPrice = (goods, value) =>
  //   goods.map((product) => ({
  //     ...product,
  //     price: product.price * value,
  //   }));
  // const updatedProduct = updateProductsPrice(products, 1.2);
  // console.log(updateProductsPrice);
  //----------------------------
  // const updateProductQuantity = (products, productId, amount) => {
  //   return products.map((product) => {
  //     return product.id === productId
  //       ? { ...product, quantity: product.quantity + amount }
  //       : product;
  //   });
  // };
  // const updated = updateProductQuantity(products, "id-3", 50);
  // console.log(products);
  // console.log(updated);
  /////////////////////////////////
  // custom map
  // const map = (arr, callback) => {
  //   const newArr = [];
  //   for (const el of arr) {
  //     newArr.push(callback(el));
  //   }
  //   return newArr;
  // };
  // const doubledWithCustomMap = map(numbers, (number) => number * 2);
  // console.log(numbers);
  // console.log(doubledWithCustomMap);
  // const labelsWithCustomMap = map(products, (product) => product.label);
  // console.log(labelsWithCustomMap);
  //   // const productsWithUpdatedPrices = products.map((product) => {
  // //   return {
  // //     ...product,
  // //     price: Math.round(product.price * 1.1, 0),
  // //   };
  // // });
}

/*
 * Filter
 */
{
  // const filteredNum = numbers.filter((number) => number > 3);
  // console.log(filteredNum);
  // //----------------------------------------
  // const filteredProd = products.filter((product) => product.price < 110);
  // console.log(filteredProd);
  // //----------------------------------------
  // const getProductWithPrice = (products, price) =>
  //   products.filter((product) => product.price < price);
  // const cheepProducts = getProductWithPrice(products, 100);
  // console.log(cheepProducts);
  // //----------------------------------------
  // const availableProducts = products.filter((product) => product.quantity > 40);
  // console.log(availableProducts);
  // //----------------------------------------
  // const getProductWithQuantity = (products, quantity) =>
  //   products.filter((product) => product.quantity > quantity);
  // const availableProducts = getProductWithQuantity(products, 40);
  // console.log(availableProducts);
  // //----------------------------------------
  // const activeUsers = users.filter((user) => user.isActive);
  // console.log(activeUsers);
  // //----------------------------------------
  // const inactiveUsers = users.filter((user) => !user.isActive);
  // console.log(inactiveUsers);
}

/*
 * Find
 */
{
  // const userFinded = users.find((user) => user.id === "id-1");
  // console.log(userFinded);
  // --------------------------
  // const findUserById = (users, id) => users.find((user) => user.id === id);
  // const user = findUserById(users, "id-2");
  // console.log(user);
}

/*
 * Every & Some
 */
{
  // const allUsersActive = users.every((user) => user.isActive);
  // console.log(allUsersActive);
  //---------------------------------------------
  // const someUsersActive = users.some((user) => user.isActive);
  // console.log(someUsersActive);
}

// в методах объекта
{
  // const storage = {
  //   currentId: 2, // так лучше никогда не делать, только в качестве примера генерации ид
  //   _items: [
  //     { id: "id-1", label: "item-1" },
  //     { id: "id-2", label: "item-2" },
  //   ],
  //   get items() {
  //     return this._items;
  //   },
  //   add(item) {
  //     // this._items.push(item);
  //     this._items = [...this._items, { id: `id-${++this.currentId}`, ...item }];
  //   },
  //   update(id, name) {
  //     this._items = this._items.map((item) =>
  //       item.id === id ? { ...item, label: name } : item
  //     );
  //   },
  //   delete(id) {
  //     this._items = this._items.filter((item) => item.id !== id);
  //   },
  // };
  // console.log(storage.items);
  // storage.add({ label: "item-3" });
  // storage.add({ label: "item-4" });
  // console.log(storage.items);
  // storage.update("id-3", "updated label");
  // console.log(storage.items);
  // storage.delete("id-2");
  // console.log(storage.items);
}

/*
 * Reduce
 */

{
  // const total = numbers.reduce((accumulator, number) => {
  //   return accumulator + number;
  // }, 0);
  // console.log(total);
  // //---------------------------------------------
  // const salary = {
  //   mango: 100,
  //   poly: 50,
  //   ajax: 150,
  // };
  // console.log(Object.values(salary).reduce((acc, el) => acc + el, 0));
  // //-------------------------------------------
  // const totalQuantity = products.reduce(
  //   (acc, product) => acc + product.quantity,
  //   0
  // );
  // console.log(totalQuantity);
}

{
  // const tweets = [
  //   { id: "000", likes: 5, tags: ["js", "nodejs"] },
  //   { id: "001", likes: 2, tags: ["html", "css"] },
  //   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  //   { id: "003", likes: 8, tags: ["css", "react"] },
  //   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  // ];
  // const tags = tweets
  //   .reduce((acc, tweet) => {
  //     acc.push(...tweet.tags);
  //     return acc;
  //   }, [])
  //   .reduce((acc, tag) => {
  //     if (!acc.includes(tag)) {
  //       acc.push(tag);
  //     }
  //     return acc;
  //   }, []);
  // console.log(tags);
}
