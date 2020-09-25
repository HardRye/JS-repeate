"use strict";

// Таймер обратного отсчета

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т.д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      days: this.selector.querySelector('.value[data-value="days"]'),
      hours: this.selector.querySelector('.value[data-value="hours"]'),
      mins: this.selector.querySelector('.value[data-value="mins"]'),
      secs: this.selector.querySelector('.value[data-value="secs"]'),
    };

    this.start();
  }

  start() {
    setInterval(() => {
      const startTime = Date.now();
      const targetDate = new Date(this.targetDate);
      const delta = targetDate - startTime;

      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((delta % (1000 * 60)) / 1000);

      this.refs.days.textContent = this.pad(days);
      this.refs.hours.textContent = this.pad(hours);
      this.refs.mins.textContent = this.pad(mins);
      this.refs.secs.textContent = this.pad(secs);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021"),
});

// console.log(CountdownTimer);
