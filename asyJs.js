//example 1
const whichGreeting = (timeOfDay) => {
  console.log(`good ${timeOfDay}`);
};

const greet = (time, fn) => {
  if (time < 1200) {
    fn("Morning");
  } else if (time >= 1200 && time < 1800) {
    fn("afternoon");
  } else {
    fn("evening");
  }
};
greet(1400, whichGreeting);
const thisFunction = () => {
  return "booya";
};

const add = () => {
  add2(example);
};
const add2 = (example) => {
  example();
};

console.log(thisFunction());

const add1 = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};
console.log(add1(2)(3));

//activity 1

const loopFunction = (fn) => {
  for (let i = 0; i < 5; i++) {
    fn();
  }
};

const greet1 = () => {
  console.log("Hello World");
};
loopFunction(greet1);

//activity 2
let multipleGreet = (greet) => {
  for (let i = 0; i < 5; i++) {
    greet("greet");
  }
};

multipleGreet(greet1);

//activity 2 .map()

let myArray = [6, 8, 4, 2, 9];
let myNewArray = myArray.map((qwerty) => qwerty * 3);
console.log(myArray);
console.log(myNewArray);

//ACTIVITY 3

const Add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};
console.log(doMaths(10)(5, multiply));
