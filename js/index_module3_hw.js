"use strict";

// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//====================================================

// Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//====================================================

// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);
//   let max = 0;
//   let best = "";
//   for (const key of keys) {
//     if (max < employees[key]) {
//       max = employees[key];
//       best = key;
//     }
//   }
//   return best;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

//====================================================

// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// const countTotalSalary = function (employees) {
//   let total = 0;
//   const values = Object.values(employees);
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

//====================================================

// Задание 5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const result = [];
//   for (const tool of arr) {
//     if (tool[prop]) {
//       result.push(tool[prop]);
//     }
//   }
//   return result;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

//====================================================

// Задание 6
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   for (const product of allProdcuts) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200
// console.log(calculateTotalPrice(products, "Дроид")); // 2800
// console.log(calculateTotalPrice(products, "C3PO"));

//====================================================

// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return { id: `id${this.transactions.length + 1}`, amount, tranType: type };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (!amount) {
      return "enter number please";
    }
    if (typeof amount !== "number") {
      return "enter number please";
    }

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions = [...this.transactions, newTransaction];
    this.balance += amount;
    return this.getBalance();
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (!amount) {
      return "enter number please";
    }
    if (typeof amount !== "number") {
      return "enter number please";
    }
    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);

    if (amount > this.balance) {
      return "снятие такой суммы не возможно, недостаточно средств";
    }

    this.transactions = [...this.transactions, newTransaction];
    this.balance -= amount;
    return this.getBalance();
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let result = "Транзакции с таким ID не существует";
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        result = transaction;
      }
    }
    return result;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.tranType === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log("log #1: ", account.withdraw(25));
console.log("log #2: ", account.deposit(25));
console.log("log #3: ", account.withdraw("One hundred"));
console.log("log #4: ", account.withdraw(100));
console.log("log #5: ", account.withdraw("20"));
console.log("log #6: ", account.deposit(50));
console.log("log #7: ", account.deposit("75"));
console.log("log #8: ", account.deposit("skldfjskdlfjkl"));
console.log("log #9: ", account.deposit(100));
console.log("log #10: ", account.withdraw(50));
console.log("log #11: ", account.getBalance());
console.log("log #12: ", account.getTransactionDetails("sdfkjhskjdfhk"));
console.log("log #13: ", account.getTransactionDetails(99));
console.log("log #14: ", account.getTransactionDetails("id2"));
console.log("log #15: ", account.getTransactionDetails("id3"));
console.log("log #16: ", account.getTransactionTotal(Transaction.DEPOSIT));
console.log("log #17: ", account.transactions);
