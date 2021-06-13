// for...in loop
const person = {
  name: "Douglas",
  age: 24,
  institution: "Kabarak University",
  County: "Nakuru",
};

for (let key in person) {
  console.log(key, person[key]);
}

for (let index in person) {
  console.log(index, person[index]);
}

// Two ways to access the property of an object i.e name,age etc.
// 1) Dot notation~e.g person.name
// 2) Bracket notation~e.g person['name'] - it's used when we don't know a head of time at
// the time of writing code what property we are going to access.
