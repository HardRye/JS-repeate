const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve("Promise successfully resolved!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

console.log("before");

const onSuccess = (message) => console.log(message);
const onError = (error) => console.error(error);

// catching error v1
// promise.then(onSuccess, onError);

// catching error v2
promise.then(onSuccess).catch(onError);

console.log("after");
