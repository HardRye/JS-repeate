import { randomIntegerFromInterval } from "./utils/random-integer.js";

// console.log(randomIntegerFromInterval(1, 10));

const horse = {
  name: "Mango",
  raceTime: randomIntegerFromInterval(1000, 3000),
};

const race = (horse) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const crashed = Math.random() > 0.6;

      if (crashed) {
        reject({ horse, errorMessage: "crashed" });
      } else {
        resolve(horse);
      }
    }, horse.raceTime);
  });
};

function notifyOnFinished({ name, raceTime }) {
  console.log(`${name} finished with time ${raceTime}ms!`);
}

race(horse)
  .then(notifyOnFinished)
  .catch((error) => {
    // console.error(error); //{horse: {…}, errorMessage: "crashed"}
    console.log(`${error.horse.name} ${error.errorMessage}`);
  });
