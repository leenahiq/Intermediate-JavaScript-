// Object literals

let userOne = {
  email: "lee@lee.com",
  name: "Leenah",
  login() {
    console.log(this.email, `has logged in`);
  },
  logout() {
    console.log(this.email, `has logged out`);
  },
};
//accessing properties
console.log(userOne);
console.log(userOne.name);
console.log(userOne.email);
console.log(userOne.login());
console.log(userOne.logout());

//updating properties
userOne.name = "Iqbal";
console.log(userOne.name);

//dynamic
let prop = "name";
userOne[prop];
console.log(userOne[prop]);
prop = "email";
console.log(userOne[prop]);

//creating new properties

userOne.age = 25;
console.log(userOne);

//classes, all thanks to ES6 we dont have to write it again and again for more object

//it is good practice to start with capital letter
class User {
  constructor(name, email) {
    // costructor only contains properties
    this._name = name;
    this._email = email;
  } //methods goes under the constructor and no need for ' ,' in classes
  login() {
    console.log(this._email, `just logged in`);
  }
  logout() {
    console.log(this._email, `just logged out`);
  }
}
let user1 = new User("ben", "ben@oop.com");
console.log(user1);
user1.login();
let user2 = new User("asima", "asima@oop.com");
console.log(user2);
user2.logout();

//what does 'new' key word do:
//1creates a new empty object {}
//2set the value of 'this' to be the new empty object
//3calls the constructor method



//method chaining 
