import { randomIntegerFromInterval } from "./utils/random-integer.js";

// console.log(randomIntegerFromInterval(1, 10));

const horses = ["Mango", "Poly", "Ajax", "Chelsy", "Kiwi"].map((name) => {
  return {
    name,
    raceTime: randomIntegerFromInterval(1000, 3000),
  };
});
// console.log(horses);

const race = (horse) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const crashed = Math.random() > 0.7;

      if (crashed) {
        reject({ horse, errorMessage: "crashed" });
      } else {
        resolve(horse);
      }
    }, horse.raceTime);
  });
};

// function notifyOnFinished({ name, raceTime }) {
//   console.log(`${name} finished with time ${raceTime}ms!`);
// }

const promises = horses.map((horse) => race(horse));

function notifyWhenRaceFinished(horses) {
  Promise.all(horses)
    .then((result) => {
      console.log("Promise.all result: ", result);
    })
    .catch((error) => {
      // console.log(error);
      console.log(`${error.horse.name} ${error.errorMessage}`);
    })
    .finally(() => {
      console.log(`Race finished - prepare for next round`);
    });
}

notifyWhenRaceFinished(promises);

function notifyOnWinner(horses) {
  Promise.race(horses).then((winner) => {
    console.log(
      `Winner is ${winner.name}! Finished with time ${winner.raceTime}ms!`
    );
  });
}

notifyOnWinner(promises);
