const fs = require('fs');

// Data to be written to the JSON file
const jsonData = {
  name: 'John Doe',
  age: 25,
  city: 'Example City'
};

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(jsonData, null, 2);

// Specify the file path
const filePath = 'example.json';

// Write to the JSON file
fs.writeFileSync(filePath, jsonString);

console.log(`Data has been written to ${filePath}`);

