class Timer {
  constructor(type="pomodoro") {
    this.type = type;
    this.pomodoro = 25;
    this.shortBreak= 5;
    this.longBreak = 15;
    this.time = document.getElementById('time');
    this.action = document.getElementById('control');
    this.ring = document.querySelector('#ring > circle');
  }

  select(type) {
    this.type = type;
    this.reset();
  }

  start() {
    this.action.innerText = 'stop'.toUpperCase();
    let overallSeconds = this[this.type] * 60;
    let startTime = overallSeconds;

    this.interval = setInterval(() => {
      // Decrease 1 second from overall time every second
      let minutes = Math.floor(overallSeconds / 60);
      let seconds = overallSeconds % 60;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      this.time.innerText = `${minutes}:${seconds}`
      overallSeconds--;

      // increase the orange ring from none to a circle
      this.ring.style.strokeDashoffset = overallSeconds * 1260 / startTime;
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
    this.stop();
    this.time.innerText = `${this[this.type]}:00`;
    this.action.innerText = 'start'.toUpperCase();
    this.ring.style.strokeDashoffset = 1260;
  }
}

