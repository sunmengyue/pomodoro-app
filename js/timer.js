class Timer {
  constructor(type) {
    this.type = type;
    this.pomodoro = 25;
    this.shortBreak= 5;
    this.longBreak = 15;
    this.time = document.getElementById('time');
    this.action = document.getElementById('control');
  }

  select(type) {
    this.type = type;
    this.reset();
  }

  start() {
    this.action.innerText = 'stop'.toUpperCase();
    let overallSeconds = this[this.type] * 60;

    this.interval = setInterval(() => {
      let minutes = Math.floor(overallSeconds / 60);
      let seconds = overallSeconds % 60;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      this.time.innerText = `${minutes}:${seconds}`
      overallSeconds--;

      if (overallSeconds < 0) {
        clearInterval(this.interval);
      }
    }, 1000)
  }

  stop() {
    clearInterval(this.interval);
    this.action.innerText = 'start'.toUpperCase();
  }

  reset() {
    this.time.innerText = `${this[this.type]}:00`;
    // 2. clock timer text change

    // 3. action text change

    // 4. red ring disappeared
  }
}

