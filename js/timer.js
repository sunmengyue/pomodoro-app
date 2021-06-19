class Timer {
  constructor(type = 'pomodoro') {
    this.type = type;
    this.pomodoro = 25;
    this.shortBreak = 5;
    this.longBreak = 15;
    this.timeElement = window[type];
    this.clock = document.getElementById('time');
    this.actionElement = document.getElementById('action');
    this.time = this.timeElement;
    this.text = this.time <= 9 ? `0${this.time}` : `${this.time}`;
    this.circle = document.querySelector('#ring > circle');
    this.interval = 0;
    this.clock = document.getElementById('clock');
  }

  stop() {
    clearInterval(this.interval);
  }

  select(type) {
    this.type = type;
    switch (type) {
      case 'shortbreak':
        return (this.clock.innerText = 5);
      case 'longbreak':
        return (this.clock.innerText = 15);
      default:
        return (this.clock.innerText = 25);
    }
  }

  start() {
    let timeLeft = this.pomodoro;
    if (this.type == 'shortbreak') {
      timeLeft = this.shortBreak;
    } else if (this.type == 'longbreak') {
      timeLeft = this.longBreak;
    }
    this.interval = setInterval(() => {
      timeLeft--;
      this.clock.innerText = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  reset() {
    this.stop();
    switch (this.type) {
      case 'shortbreak':
        return (this.clock.innerText = 5);
      case 'longbreak':
        return (this.clock.innerText = 15);
      default:
        return (this.clock.innerText = 25);
    }
  }
}
