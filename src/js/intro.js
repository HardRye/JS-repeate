/*
 * setTimeout
 */
{
  // console.log('---------------- setTimeout examples ---------------');
  // console.log('LOG 1');
  // console.log('LOG 2');
  //
  // const logger = (a, b) => console.log('logger: ', a, b);
  //
  // // setTimeout(callback, delay, cbArg1, cbArg2, cbArg3,...) returns ID
  // const timerId_first = setTimeout(logger, 3000, 2, 3);
  // const timerId_second = setTimeout(logger, 3000, 22, 33);
  // console.log('LOG 3');
  //
  // console.log('timerId_first: ', timerId_first);
  // console.log('timerId_second: ', timerId_second);
  // const shouldCancelTimer = Math.random() > 0.3;
  // console.log(shouldCancelTimer); // if true we will nevet see result of logger in timerId_first
  //
  // if (shouldCancelTimer) {
  //   clearTimeout(timerId_first);
  // }
  // // document.addEventListener('DOMContentLoaded', () => {
  // //   setTimeout(() => {
  // //     console.log('SHOW MODAL');
  // //   }, 10000);
  // // });
}

/*
 * setInterval
 */
{
  //   console.log('---------------- setInterval examples ---------------');
  //   //
  //   // const logger = () => console.log(`Login at time ${Date.now()}`);
  //   // const intervalId = setInterval(logger, 2000);
  //   //
  //   console.log('before');
  //   let subscriptionCounter = 0;
  // //
  //   const intervalId2 = setInterval(() => {
  //     if (subscriptionCounter === 5) {
  //       console.log('Stopping inteval!');
  //       clearInterval(intervalId2);
  //       return;
  //     }
  // //
  //     subscriptionCounter += 1;
  //     console.log('Subscribe to newsletter');
  //     console.log(subscriptionCounter);
  //     // console.log('qwerty');
  //   }, 1000);
  // //
  //   console.log('after');
}

/*
 * event loop
 */

// let intervalCounter = 0;
// console.log('First log'); // 1
// setTimeout(console.log, 2000, 'Timeout Log 2000ms'); // 4
// setTimeout(console.log, 4000, 'Timeout Log 4000ms'); // 6
// console.log('Second Log'); // 2
// const intervalId = setInterval(() => {
//   console.log('Interval log each 3000ms');
//   intervalCounter += 1;
//   if (intervalCounter === 5) {
//     clearInterval(intervalId);
//   }
// }, 3000); // 5,7,8,9,10
// console.log('Third log'); // 3
