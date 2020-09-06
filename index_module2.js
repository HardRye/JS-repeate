"use strict";

// const goods = 'apples';

// const products = [
//     'apples',
//     'grapes',
//     'bananas'
// ];

// // console.log(products[1]);

// products[0]='chicken';

// console.log(products);
// console.log(products.length);

// products[3] = 'hare';

// console.log(products);

//==============================================

// const a = [1,2,3];
// const b = [1,2,3];

// console.log(a === b); // false
// console.log(typeof a); // object

//==============================================

// const message = 'May the force will be with you!'

// const words = message.split(' ');
// console.log(words);
// console.log(words.join('_'));

// const indexOfForce = words.indexOf('force');
// console.log(indexOfForce); // 2
// console.log(words.includes('be')); // true

// const users = ['mango','ajax','poly'];
// const login = prompt('enter login');

// const isRegistred = users.includes(login);

// if (isRegistred) {
//     console.log('Welcome');
// } else {
//     console.log('Error');
// }

//==============================================
// push pop

// const letters = ['a', 'b', 'c', 'd'];
// console.log(letters);

// letters.push('e', 'f', 'g');
// console.log(letters); //["a", "b", "c", "d", "e", "f", "g"]

// letters.pop();
// letters.pop();
// console.log(letters);

//==============================================
// slice - not mutable

// const numbers = [1,2,3,4,5];
// const copy = numbers.slice(1,3);

// console.log(numbers);
// console.log(copy);

//==============================================
// splice - mutable !!!

// const cards = ['card-1', 'card-2', 'card-3', 'card-4'];

// // cards.splice(1,2);
// // console.log(cards); ["card-1", "card-4"]

// cards.splice(4,0,'card-5');
// console.log(cards); // ["card-1", "card-5", "card-2", "card-3", "card-4"]

// cards.splice(1,0,cards.pop(cards.indexOf('card-5')))
// console.log(cards);

/*
 * LOOPS
 */

// let value = 0

// while (value < 5) {
//     console.log(value);
//     value+=1;
// }

// const products = ['apple','grape','banana'];
// let counter=0;

// while (counter < products.length) {
//     console.log(products[counter]);
//     counter += 1;
// }

// const inputs = [];
// let userInput;

// do {
//     userInput = prompt('enter smth');
//     if (userInput) {inputs.push(userInput);}
// } while (userInput)
// ;

// console.log(inputs);

//==============================================

// for (let i = 0; i < 5; i+=1) {
//     console.log(i);
// }

// const products = ['apple','grape','banana'];

// for(let i = 0; i < products.length; i += 1) {
//     console.log(products[i]);
// }
// ;

// for (const item of products) {
//     console.log(item);
// }

//----------------------------------------------

// const matrix = [[1,2,3],[4,5,6],[7,8,9]]

// for (let i = 0; i < matrix.length; i += 1) {
//     console.log(`matrix[${i}]: `, matrix[i]);

//     for ( let j = 0 ; j < matrix[i].length; j += 1) {
//         console.log(`matrix[${i}][${j}]`, matrix[i][j]);
//     }
// }

// for (let i = 0; i < matrix.length; i += 1) {
//     console.log(matrix[i]);
//     for (let j = 0; j < matrix[i].length; j += 1) {
//         console.log(matrix[i][j]);
//     }
// }

//==============================================

// const message = 'May the force be with you';
// const words = message.split(' ');
// let longestWord='';

// for (let i = 0; i < words.length; i+=1) {
//     if (longestWord.length < words[i].length) {
//         longestWord = words[i]
//     }
// }

// console.log(longestWord);

//==============================================

// const numbers = [12, 21, 34, 46, 52, 66, 78, 84];
// const min = numbers.slice(0,1)[0];
// const max = numbers.slice(numbers.length-1)[0];
// let result = false;

// // console.log(min, max);

// do {
//     const userInput = prompt(`Enter btw ${min} and ${max}`)

//     const userInputNumber = Number(userInput);

//     if (numbers.includes(userInputNumber)) {
//         result = true;
//         console.log('You win!');
//         break;
//     }

// } while (!result);

/*
 * FUNCTIONS
 */

// const add = function (a, b ) {
//     // console.log('function call');
//     return a+b;
// }

// const x = add(2,3);
// console.log(x);

//================================================

// const findLongestWordInString = function(string) {
//     const words = string.split(' ');
//     let longestWord = '';

//     for (const word of words) {
//         if(word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWordInString('[JS 11+12] Вебинар 5. Функции.'));
// console.log(findLongestWordInString('Lorem ipsum, dolor sit amet consectetur adipisicing elit'));
// console.log(findLongestWordInString('Ex officia voluptates vel incidunt fugiat repellendus autem porro aliquid ab modi'));
// console.log(findLongestWordInString('Quis vero nisi beatae molestiae distinctio est, natus aspernatur provident'));

//================================================

// const includes = function(array, value) {
//     for(const item of array) {
//         // console.log(item);
//         if (item === value) {return true;}
//     }
//     return false;
// };

//================================================

// console.log(includes([1,2,3], 4));
// console.log(includes([1,2,3,4,5], 2));
// console.log(includes(['mango','ajax','poly'], 'ajax'));

// const message = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit'
// const message = 'Ex officia voluptates vel incidunt fugiat repellendus autem porro aliquid ab modi'
// const message = 'Quis vero nisi beatae molestiae distinctio est, natus aspernatur provident'
// let price = 0;

// const priceCalc = function(string) {
//     const words = message.split(' ');
//     return words.length * 10;
// }

// price = priceCalc(message);

// console.log(price);

//================================================

// const double = function(array) {
//     const result = [];

//     for (let i = 0; i < array.length; i+=1) {
//         result.push(array[i]*2);
//     }
//     return result;
// }

// const numbers = [1,2,3,4,5];

// console.log(double(numbers));
// console.log(numbers);

//================================================

// const add = function() {
//     // console.log(arguments);
//     let total=0;
//     for (let i=0; i<arguments.length; i+=1 )
//     {
//         total += arguments[i]
//     }
//     return total
// }

// console.log(add(1,2,3,4,5,6));
// console.log(add(1,2,3,4,5,6,7,8,9));
// console.log(add(1,2,3,4));

// const addMultiply = function () {
//   // console.log(arguments);
//   const args = Array.from(arguments);
//   const multiplicator = args[0];
//   let total = 0;
//   args.slice(1);

//   for (let i = 0; i < args.length; i += 1) {
//     total += arguments[i];
//   }
//   return total * multiplicator;
// };

// console.log(addMultiply(10, 2, 3, 4, 5, 6));
// console.log(addMultiply(15, 2, 3, 4, 5, 6, 7, 8, 9));
// console.log(addMultiply(20, 2, 3, 4));

// операция rest
// const add = function (...args) {
//   console.log(args);
// };

// console.log(add(1, 2, 3));

// const addMultiply = function (mult, ...args) {
//   console.log(mult, args);
// };

// console.log(addMultiply(9, 7, 5, 3));

/*
 * homework-02
 */
// Задание 1
// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(" ");
//   return words.length * pricePerWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   const words = string.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function (string) {
//   if (string.length > 40) {
//     const letters = string.split("");
//     letters.length = 40;
//     string = letters.join("") + "...";
//   }
//   return string;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

// Задание 5
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   const messageLower = message.toLowerCase();
//   return messageLower.includes("spam") || messageLower.includes("sale")
//     ? true
//     : false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Задание 6
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("ввести число");

//   if (input) {
//     if (!Number(input)) {
//       alert("Было введено не число, попробуйте еще раз");
//       continue;
//     }
//     numbers.push(Number(input));
//   }
// } while (input);

// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total += number;
//   }
// }

// console.log(`Общая сумма чисел равна ${total}`);

// Задание 7 - дополнительное, выполнять не обязательно
// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// bell Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 20;
};

const isLoginUnique = function (allLogins, login) {
  const loginLower = login.toLowerCase();
  const loginsArr = allLogins.slice();
  const loginsArrLower = [];
  for (const log of loginsArr) {
    loginsArrLower.push(log.toLowerCase());
  }
  return loginsArrLower.includes(loginLower);
};

const addLogin = function (allLogins, login) {
  const isValid = isLoginValid(login);
  const isUnique = isLoginUnique(allLogins, login);
  if (!isValid) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  if (isUnique) {
    return "Такой логин уже используется!";
  }
  allLogins.push(login);
  return "Логин успешно добавлен!";
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "robotgoogles"));
console.log(addLogin(logins, "aJ4X1SboZZ"));
