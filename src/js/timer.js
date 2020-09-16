class Timer {
  constructor({ element, initialValue = 0, step = 1 }) {
    this.value = initialValue;
    this.step = step;
    this.refs = {
      decBtn: element.querySelector('button[data-action="decrement"]'),
      incBtn: element.querySelector('button[data-action="increment"]'),
      clockface: element.querySelector('div.value'),
    };

    this.updateClockface();
    this.init();
  }

  updateClockface() {
    this.refs.clockface.textContent = this.value;
  }

  onClick({ target }) {
    // console.log(target);
    this.value =
      target.dataset.action === 'decrement'
        ? this.value - this.step
        : this.value + this.step;

    this.updateClockface();
  }

  init() {
    this.refs.decBtn.addEventListener('click', this.onClick.bind(this));
    this.refs.incBtn.addEventListener('click', this.onClick.bind(this));
  }
}

export default Timer;
