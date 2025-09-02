/********************
 * 1. VARIABLES & DATA TYPES
 ********************/
let name = "Alice"; // string
const age = 25; // number
let isStudent = true; // boolean
let marks = null; // null
let notDefined; // undefined
let hobbies = ["coding", "reading", "gaming"]; // array
let person = { name: "Bob", age: 30 }; // object

console.log(typeof name, typeof age, typeof isStudent);

/********************
 * 2. FUNCTIONS
 ********************/
function greet(userName) {
  return `Hello, ${userName}!`;
}

const add = (a, b) => a + b; // arrow function

console.log(greet("Alice"));
console.log(add(5, 10));

/********************
 * 3. OBJECTS & METHODS
 ********************/
let car = {
  brand: "Tesla",
  model: "Model 3",
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  },
};

car.start();

/********************
 * 4. CLASSES
 ********************/
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.type} says ${this.sound}`);
  }
}

let dog = new Animal("Dog", "Woof");
dog.speak();

/********************
 * 5. CONDITIONALS
 ********************/
if (age > 18) {
  console.log("Adult");
} else if (age === 18) {
  console.log("Just turned adult!");
} else {
  console.log("Minor");
}

// Ternary operator
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

/********************
 * 6. LOOPS
 ********************/
// for loop
for (let i = 0; i < 3; i++) {
  console.log("For loop i =", i);
}

// while loop
let j = 0;
while (j < 3) {
  console.log("While loop j =", j);
  j++;
}

// for...of (arrays)
for (let hobby of hobbies) {
  console.log("Hobby:", hobby);
}

// for...in (objects)
for (let key in person) {
  console.log(key, ":", person[key]);
}

/********************
 * 7. ERROR HANDLING
 ********************/
try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.error("Error caught:", err.message);
}

/********************
 * 8. MODULE STYLE (ES6)
 ********************/
// If this were in another file, we’d use:
// export { greet, add };
// import { greet, add } from "./filename.js";
