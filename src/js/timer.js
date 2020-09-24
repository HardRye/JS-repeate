const refs = {
  startBtn: document.querySelector('button[data-action="start-timer"]'),
  stopBtn: document.querySelector('button[data-action="stop-timer"]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.startTime = Date.now();
    this.timerId = setInterval(() => {
      // console.log('Counting!');
      const currentTime = Date.now();

      this.delta = currentTime - this.startTime;
      // console.log(delta);

      updateClockface(this.delta);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    this.delta = 0;
    updateClockface(this.delta);
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
  // const date = new Date(time);  // console.log(date);
  // const hours = pad(date.getUTCHours());
  // const mins = pad(date.getMinutes());
  // const secs = pad(date.getSeconds());
  // console.log(`${hours}:${mins}:${secs}`);

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
