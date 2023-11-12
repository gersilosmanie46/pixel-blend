/*
 * Filename: complexCode.js
 * Description: Complex JavaScript code demonstrating various advanced concepts
 */

// Import external libraries
const express = require('express');
const moment = require('moment');
const axios = require('axios');

// Initialize express app
const app = express();

// Middleware to parse request body as JSON
app.use(express.json());

// Declare variables
let counter = 0;
const apiUrl = 'https://api.example.com/data';
const apiKey = 'API_KEY';

// Define complex functions
const fetchData = async () => {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
};

const processData = (data) => {
    const processedData = data.map((item) => {
        const newItem = { ...item };
        newItem.timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
        return newItem;
    });

    return processedData;
};

// Define API endpoints
app.get('/data', async (req, res) => {
    try {
        const data = await fetchData();
        const processedData = processData(data);
        res.json(processedData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch and process data' });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Define custom classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, role, salary) {
        super(name, age);
        this.role = role;
        this.salary = salary;
    }

    increaseSalary(amount) {
        this.salary += amount;
        console.log(`Increased salary by ${amount}. New salary is ${this.salary}.`);
    }
}

// Usage of custom classes
const john = new Person('John', 30);
john.introduce();

const sarah = new Employee('Sarah', 35, 'Developer', 5000);
sarah.introduce();
sarah.increaseSalary(1000);

// Other complex code...
// ...

// Finally, export the app for testing
module.exports = app;