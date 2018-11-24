class Lamp {
  constructor() {
    this.name = "a lamp";
  }

}

const turnOn = function(str) {
  console.log(this)
   console.log("Turning on " + str + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to


Function.prototype.myBind = function(contextObj) {
  // this = function (turnOn)
  return (str) => this.call(contextObj, str); // turnon(tis.name)
  // return (str) => this.apply(contextObj, [str]); // turnon(tis.name)
};

// turnOn.bind(lamp)();
turnOn.myBind(lamp)("hello");



// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
