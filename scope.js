// global scope

let global = "global"; // variable is in globl scope

console.log(`Global scope: ${global}`);
const call = () => {
  console.log(`inside function ${global}`); // can call on it inside function
};

//function scope

let globalVar = "globalVar"; //global scop

const callVar = () => {
  let localVar = "localVar";
  console.log(`Inside function: ${globalVar}`);
  console.log(`Inside function ${localVar}`);
};
callVar();
//but
//console.log(localVar) will return localVar is not defined

//block scope

let string = "string";
const newstring = () => {
  let string = "new string";
  console.log(`new string: ${string}`); //will return new string
};
newstring();
console.log(`outside string : ${string}`); // wil return previous string because new string stays inside block code
