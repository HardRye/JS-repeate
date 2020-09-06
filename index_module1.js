"use strict";

{
// const min = 10;
// const max = 30;
// const value = 25;

// const isInRange = value >= 10 && value <= 30;
// value = 25 -> true && true 
// const isInRange = value >= 10 && value <= 30;
// value = 45 -> true && false
// const isInRange = value >= 10 && value <= 30;
// value = 5 -> false && true

// console.log(1 && 2 && 3 && 4 && null && 5);
// null

// const outOfRange = value < 10 || value > 30;
// value = 5 

// console.log('' || NaN || null || 5 || 2);
// 5


// console.log("isInRange: ", isInRange);
// console.log('outOfRange: ', outOfRange);
}

{
//     const min = 10;
// const max = 30;
// const value = 5;

// const isInRange = value >= min && value <= max;

// // if (isInRange) { 
// //     console.log('Number is in range! Woooooo!');
// // } else {
// //     console.log('Number is not in range! Booooooo!');
// // }

// if (value >= max) {
//     console.log(`Number ${value} over than ${max}`);
// } else if (value > min && value < max) {
//     console.log(`Number ${value} between ${min} and ${max}`);
// } else if (value <= min) {
//     console.log(`Number ${value} less than ${min}`);
// } else {
//     console.log('WTF!!!');
// }


// console.log('after if');
}


/*
 * SCOPES
 */

{

// const X = 5;

// if (true) {
//     // A
//     const Y = 10;

//     console.log('global X in A: ', X);
//     console.log('Y from A in A: ', Y);
//     if (true) {
//         // B
//         console.log('global X in B: ', X);
//         console.log('Y from A in B: ', Y);
//     }
// }

// if (true) { 
//     // C
//     const Z = 25;

//     console.log('global X in C: ', X);
//     // console.log('Y from A in C: ', Y); //error
//     console.log('Z from C in C: ', Z);
// }

// console.log('Y from A in global: ', Y); //error
// console.log('Z from C in global: ', Z); //error

}

/*
 * SWITCH
 */

{
// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const userChoise = 1;

// let message;

// // if (userChoise === TAKEOUT) {
// //     message = 'ну и вывози сам, жлоб!'
// // } else if (userChoise === COURIER) {
// //     message = 'супер, за лишние деньги тебе доставят'
// // } else if (userChoise === POST) {
// //     message = 'посылка приедет завтра'
// // } else {
// //     message = 'ну и ладно'
// // }

// switch(userChoise) {
//     case TAKEOUT: 
//         message = 'ну и вывози сам, жлоб!'
//         break;

//     case COURIER:
//         message = 'супер, за лишние деньги тебе доставят';
//         break;

//     case POST:
//         message = 'посылка приедет завтра';
//         break;

//     default:
//         message = 'ну и ладно';
// }
// console.log(message);

}


/*
 * home worK 
 */


// TASK 1

// const name = 'Генератор защитного поля';
// let price = 1000;

// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// price = 2000;
// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// TASK 2

// const total = 100;
// const ordered = 130;

// if (ordered > total) {
//     console.log('На складе недостаточно тoваров!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }


// TASK 3

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const input = prompt('Enter password: ');

// if (!input) {
//     message='Отменено пользователем!'
// } else if (input===ADMIN_PASSWORD) {
//     message='Добро пожаловать!'
// } else {
//     message='Доступ запрещен, неверный пароль!'
// }

// alert(message);


// TASK 4

// const credits = 23580;
// const pricePerDroid=3000;
// let totalPrice;

// const input = prompt('количество дроидов которые пользователь хочет купить');

// if (!input) { 
//     console.log('Отменено пользователем!');
// } else if (!Number(input)) {
//     console.log("Данные введены не корректно");
//   } else {
//     totalPrice = Number(input) * pricePerDroid;

//     if (totalPrice > credits) {
//         console.log('Недостаточно средств на счету!');
//     } else {
//         console.log(`Вы купили ${input} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
//     }
// }


// TASK 5

// const inputCountry = prompt('Where to send: ');
// const message = function(country, price) {
//     return `Доставка в ${country} будет стоить ${price} кредитов`
// }

// const CHINA=100;
// const CHILE=250;
// const AUSTRALIA = 170;
// const INDIA = 80;
// const JAMAICA = 120;

// if (!inputCountry) {
//     console.log('Отменено пользователем!');
// } else {
//     switch (inputCountry.toUpperCase()) {
//         case 'CHINA': 
//             console.log(message(inputCountry,CHINA));
//             break;
//         case 'CHILE': 
//             console.log(message(inputCountry,CHILE));
//             break;
//         case 'AUSTRALIA': 
//             console.log(message(inputCountry,AUSTRALIA));
//             break;
//         case 'INDIA': 
//             console.log(message(inputCountry,INDIA));
//             break;
//         case 'JAMAICA': 
//             console.log(message(inputCountry,JAMAICA));
//             break;
//         default: console.log('В вашей стране доставка не доступна');
//     }
// }


// TASK 6
// let input;
// let total = 0;

// do {
//     input = prompt('ввести число');
//     if (!input) {
//         break;
//     } else if (!Number(input)) {
//         console.log('Было введено не число, попробуйте еще раз!');
//     } else {
//         total += Number(input);
//     }
// } while (input);

// console.log(`Общая сумма чисел равна ${total}`);