"use strict";

{
  // // записывается в момент объявления функции
  // // [[Environment]]: global
  // // Parrent: null
  // // {}
  // const fn = function (a) {
  //   // создается в момент вызова функции
  //   // [[Environment]]: fn
  //   // Parrent: global env
  //   // {a: undef}
  //   const x = 5;
  //   // создается в момент вызова функции
  //   // [[Environment]]: fn
  //   // Parrent: global env
  //   // {a: undef, x: 5}
  //   return a + x;
  // };
  // // [[Environment]]: global
  // // Parrent: null
  // // {fn: f,}
  // console.log(fn()); // NaN
}

{
  // // записывается в момент объявления функции
  // // [[Environment]]: global
  // // Parrent: null
  // // {}
  // const fn = function (a) {
  //   // создается в момент вызова функции
  //   // [[Environment]]: fn
  //   // Parrent: global env
  //   // {a: 10}
  //   const x = 5;
  //   // создается в момент вызова функции
  //   // [[Environment]]: fn
  //   // Parrent: global env
  //   // {a: 10, x: 5}
  //   return a + x;
  // };
  // // [[Environment]]: global
  // // Parrent: null
  // // {fn: f,}
  // console.log(fn(10)); // 15
}

{
  // // записывается в момент запуска скрипта
  // // [[Environment]]: global
  // // Parrent: null
  // // {}
  // const a = 15;
  // const b = 20;
  // // записывается в момент объявления функции
  // // [[Environment]]: global
  // // Parrent: null
  // // {a: 15, b:20}
  // const fn = function (a) {
  //   // создается в момент вызова функции
  //   // [[Environment]]: fn
  //   // Parrent: global env
  //   // {a: 10}
  //   const x = 5;
  //   // создается в момент вызова функции
  //   // [[Environment]]: fn
  //   // Parrent: global env
  //   // {a: 10, x: 5}
  //   return a + b + x;
  // };
  // // [[Environment]]: global
  // // Parrent: null
  // // {a: 15, b:20, fn: f}
  // console.log(fn(10)); // 10+20+5 = 35
}

{
  // console.log("lex env 4");
  // // записывается в момент объявления функции
  // // [[Environment]]: global
  // // Parrent: null
  // // {}
  // const fn = function () {
  //   //записывается в момент вызова функции
  //   // [[Environment]]: fn
  //   // Parrent: global
  //   // {a: undefined}
  //   var a = 10;
  //   // [[Environment]]: fn
  //   // Parrent: global
  //   // {a: 10}
  //   function callOtherFuncion() {
  //     //записывается в момент вызова функции
  //     // [[Environment]]: callOtherFuncion
  //     // Parrent: fn
  //     // {a: undefined} // var hoisting
  //     console.log("2: ", a);
  //     var a = 15;
  //     // [[Environment]]: callOtherFuncion
  //     // Parrent: fn
  //     // {a: 15}
  //     showValue();
  //   }
  //   // [[Environment]]: fn
  //   // Parrent: global
  //   // {a: 10}
  //   function showValue() {
  //     //записывается в момент вызова функции
  //     // [[Environment]]: fn { a: 10 }
  //     // Parrent: global
  //     // {callOtherFuncion: f}
  //     console.log("1: ", a);
  //   }
  //   // [[Environment]]: fn
  //   // Parrent: global
  //   // {a: 10, callOtherFuncion: f}
  //   callOtherFuncion();
  // };
  // // [[Environment]]: global
  // // Parrent: null
  // // {fn: f}
  // fn();
  // console.log("3: ", a); // error
}

// {
//   let a = 7;

//   // записывается в момент объявления функции
//   // [[environment]]: global
//   // parrent: null
//   // {a: 7}
//   function customFn() {
//     let a = 10;

//     // записывается в момент вызова функции fn
//     // [[environment]]: fn
//     // parrent: global
//     // {a: 10}
//     showA();
//   }

//   // [[environment]]: global
//   // parrent: null
//   // {a: 7}
//   function showA() {
//     console.log(a);
//   }

//   // [[environment]]: global
//   // parrent: null
//   // {a: 7}
//   customFn();
// }
