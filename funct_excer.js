class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    if (this.minutes < 10){
      this.minutes = '0' + this.minutes;
    }
    if (this.seconds < 10){
      this.seconds = '0' + this.seconds;
    }
    if (this.hours < 10){
      this.hours = '0' + this.hours;
    }
    setInterval(this._tick.bind(this), 1000);
    // this.printTime();
    // this._tick();
  }

  printTime() {

    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.seconds += 1;
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
