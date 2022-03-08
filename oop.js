//warm up activities
const str = "I am leenah";
const num = 4;
const boolean = true;

//creating array and ading item into it
const array = ["leenah", 22, ["hello world"], true];
console.log(array);
array.push("I'm bored writing this useless array");
console.log(array);

//forloop for printing all item in array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//cash machine
let balance = 1000;

const cashMachine = (amount) => {
  if (amount > 0 && amount < balance) {
    console.log(`Cash withdrawls is ${amount}`);
    balance -= amount;
    console.log(`Remaining balance ${balance}`);
  } else {
    console.log(`some thing is wrong`);
  }
};
cashMachine(400);

//tempalte object
let rosie = {
  _name: "rosie",
  _hops: 0,
  get name() {
    return this._name;
  },
  get hops() {
    return this._hops;
  },
  increaseHops() {
    this._hops++;
  },
};
console.log(rosie);

//class object
class bunny {
  constructor(name, theHops) {
    this._name = name;
    this._hops = theHops;
  }
  get name() {
    return this._name;
  }
  get hops() {
    return this._hops;
  }
  increaseHops() {
    this._hops++;
  }
}
console.log(bunny);
const rosie1 = new bunny("Rosie1", 10);
console.log(rosie1);
const jim = new bunny("jim", 7);
console.log(jim);

//activity 1
class carPark {
  constructor(reg, arrival, dep) {
    this._reg = reg;
    this._arrival = arrival;
    this._dep = dep;
    this._costPerHour = 1.5;
  }
  get reg() {
    return this._reg;
  }
  get charge() {
    return (this._dep - this._arrival) * this._costPerHour;
  }
}

const example1 = new carPark();
const rg456 = new carPark("rg456", 4, 7);
console.log(rg456);
console.log(rg456.charge);

//project 2
class animal {
  constructor(name) {
    this._name = name; //properties
    this._hunger = 100;
    this._thirst = 100;
  }
  get name() {
    return this._name;
  }
  get name() {
    return this._hunger;
  }
  get name() {
    return this._thirst;
  }
  //methods
  eat() {
    this._hunger--;
  }
  drink() {
    this._thirst--;
  }
}
//subclass
class Bunny extends animal {
  constructor(name, lovesCarrot) {
    super(name);
    this._lovesCarrot = lovesCarrot;
  }
  get lovesCarrot() {
    return this._lovesCarrot;
  }
}

const Rosie = new Bunny(
  "rosie",
  true,
  ["basil", "rocket", "broccoli"] //we can pass array
);

console.log(Rosie);
