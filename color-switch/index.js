"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isActive = false;
let intervalId;

function start() {
  if (isActive) {
    return;
  }
  intervalId = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    console.log(index);
    document.body.style.backgroundColor = colors[index];
  }, 1000);

  isActive = true;
}

function stop() {
  clearInterval(intervalId);
  isActive = false;
}

refs.startBtn.addEventListener("click", start);
refs.stopBtn.addEventListener("click", stop);
