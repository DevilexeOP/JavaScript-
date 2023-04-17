// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//     this.getBirthDate = function () {
//       return this.dob.getDate();
//     };
//     this.fullName = function () {
//       return `${this.firstName} ${this.lastName}`;
//     };
// }

// Person.prototype.getBirthDate = function () {
//   return this.dob.getDate();
// };

// Person.prototype.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthDate() {
    return this.dob.getDate();
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("Devil", "op", "09-10-2005");
const person2 = new Person("Jod", "bbg", "5-2-2007");
console.log([person1, person2]);
console.log(person1.dob.toUTCString());
console.log(person2.dob.toUTCString());
console.log(person1.getBirthDate());
console.log(person1.fullName());
