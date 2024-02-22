const fs = require('fs');

// Specify the file path
const filePath = 'example.json';

// Read existing data from the JSON file
let existingData = {};

try {
  const existingDataString = fs.readFileSync(filePath, 'utf8');
  existingData = JSON.parse(existingDataString);
} catch (err) {
  console.error('Error reading existing data:', err.message);
}

// New data to be added or updated
const newData = {
  additionalInfo: 'This is new information',
  updatedAt: new Date().toISOString()
};

// Merge existing data with new data
const combinedData = { ...existingData, ...newData };

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(combinedData, null, 2);

// Write the combined data back to the JSON file
try {
  fs.writeFileSync(filePath, jsonString);
  console.log(`Data has been written to ${filePath}`);
} catch (err) {
  console.error('Error writing data to file:', err.message);
}

