class Timer {
  constructor(type = 'pomodoro') {
    this.type = type;
    this.pomodoro = 25;
    this.shortBreak = 5;
    this.longBreak = 15;
    this.time = document.getElementById('time');
    this.action = document.getElementById('control');
    this.circle = document.getElementById('circle');
  }

  select(type) {
    this.type = type;
    this.reset();
  }

  start() {
    this.action.innerText = 'stop'.toUpperCase();
    let overallSeconds = this[this.type] * 60;
    let startTime = overallSeconds;
    let minutes = 0;
    let seconds = 0;

    this.interval = setInterval(() => {
      // Decrease 1 second from overall time every second
      minutes = Math.floor(overallSeconds / 60);
      seconds = overallSeconds % 60;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      this.time.innerText = `${minutes}:${seconds}`;
      overallSeconds--;

      // increase the orange ring from none to a circle
      this.circle.style.strokeDashoffset = (overallSeconds * 1257) / startTime;

      if (overallSeconds <= 0) {
        clearInterval(this.interval);
        this.action.innerText = 'reset'.toUpperCase();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.action.innerText = 'start'.toUpperCase();
  }

  reset() {
    this.stop();
    this.time.innerText = `${this[this.type]}:00`;
    this.action.innerText = 'start'.toUpperCase();
    this.circle.style.strokeDashoffset = 1257;
  }
}
