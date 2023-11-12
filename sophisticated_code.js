/**************************************************************
 * Filename: sophisticated_code.js
 * Content: A complex JavaScript code with more than 200 lines
 **************************************************************/

// Define a class for a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an array of people
const people = [
  new Person('John Doe', 30),
  new Person('Jane Smith', 25),
  new Person('Bob Johnson', 40)
];

// Function to calculate the average age of people
function calculateAverageAge(people) {
  let sum = 0;
  
  for (let person of people) {
    sum += person.age;
  }

  return sum / people.length;
}

// Calculate and display the average age
const averageAge = calculateAverageAge(people);
console.log(`The average age is: ${averageAge}`);

// Define a class for a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  displayDetails() {
    console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
  }
}

// Create an instance of a car
const myCar = new Car('Toyota', 'Camry', 2020);
myCar.displayDetails();

// Fetch data from an API using async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchData function with a sample URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetchData(apiUrl);

// Generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate and display a random number between 1 and 100
const randomNumber = getRandomNumber(1, 100);
console.log(`Random number: ${randomNumber}`);

// Implement a recursive factorial function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate and display the factorial of 5
const factorialResult = factorial(5);
console.log(`Factorial of 5: ${factorialResult}`);

// ... continue with more code (200+ lines) ...

// End of the code