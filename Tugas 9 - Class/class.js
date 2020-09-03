//Soal No.1 Release 0
console.log("Soal No.1 Release 0");
console.log("");

class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get anam() {
    return this.name;
  }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
console.log("");

//Soal No.1 Release 1
console.log("Soal No.1 Release 1");
console.log("");

class Ape extends Animal {
  constructor(name) {
    super(name);
    this.yelll = "Auooo";
  }
  yell() {
    return this.yelll;
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name);
    this.jumpp = "hop hop";
  }
  jump() {
    return this.jumpp;
  }
}
 
var sungokong = new Ape("kera sakti")
console.log(sungokong.yell()) // "Auooo"
 
var kodok = new Frog("buduk")
console.log(kodok.jump()) // "hop hop" 
console.log("");

//Soal No.2 - Function to Class
console.log("Soal No.2 - Function to Class");
console.log("");

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 