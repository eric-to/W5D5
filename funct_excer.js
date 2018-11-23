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
    this.printTime();
    setInterval(Clock._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  static _tick() {
    console.log(this);
    this.seconds += 1;
    this.printTime();
  }
}

const clock = new Clock();
