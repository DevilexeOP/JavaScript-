const people = {
  name: "John",
  age: 45,
  hobbies: ["coding", "movies", "sports"],
  email: "John@example.com",
  address: {
    city: "Mumbai",
    state: "India",
    pincode: "400703",
  },
};

console.log(people);
console.log(people.hobbies.push("gaming"));
console.log(people.name, people.age);
console.log(people.hobbies);

// pulling different values from object
const {
  name,
  age,
  address: { state },
} = people;
console.log(name, age, state);
