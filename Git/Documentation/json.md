JSON (JavaScript Object Notation) ist ein leichtgewichtiges Datenformat, 
das für den Austausch von strukturierten Daten zwischen Anwendungen verwendet wird. 

* Syntax:

JSON verwendet eine einfache, leicht lesbare Textsyntax.
Daten werden in Schlüssel-Wert-Paaren dargestellt.
Datenstrukturen umfassen Objekte (begrenzt von geschweiften Klammern {}) 
und Arrays (begrenzt von eckigen Klammern []).
Datentypen:

JSON unterstützt grundlegende Datentypen wie Zeichenketten (Strings), 
Zahlen, Booleans, Null und komplexe Typen wie Objekte und Arrays.

```json
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "grades": [90, 85, 88]
}

```

* Objekte und Arrays:

Ein JSON-Objekt besteht aus Schlüssel-Wert-Paaren, wobei der Schlüssel immer eine Zeichenkette ist.
Ein JSON-Array ist eine geordnete Liste von Werten.
```json
{
  "person": {
    "name": "Alice",
    "age": 25
  },
  "hobbies": ["reading", "traveling"]
}
```
Interoperabilität:

JSON ist sprachunabhängig und wird von vielen Programmiersprachen unterstützt.
Dies fördert die Interoperabilität zwischen verschiedenen Systemen, da Daten einfach 
zwischen Anwendungen ausgetauscht werden können.

* Anwendungen:

Häufig verwendet für den Datenaustausch zwischen Client und Server in Webanwendungen
(z.B., AJAX-Anfragen).
Auch in der Konfigurationsdateien und APIs weit verbreitet.

* Lesbarkeit und Einfachheit:

Die menschenlesbare Struktur von JSON macht es einfach für Entwickler, 
die Daten zu verstehen und zu bearbeiten.
Die klare Syntax erleichtert auch das Debuggen von Datenübertragungsproblemen.

* Einschränkungen:

JSON unterstützt keine zyklischen Datenstrukturen (Objekte, die auf sich selbst verweisen).
Schlüssel müssen als Zeichenketten deklariert werden.
JSON kann keine Funktionen oder speziellen Datentypen wie Dateien darstellen.


`Anwendung`

In JavaScript wird JSON häufig für den Datenaustausch zwischen
Server und Client oder innerhalb von Anwendungen verwendet.

* JSON Objekt erstellen

```js
// Ein einfaches JavaScript-Objekt
var person = {
  name: "John Doe",
  age: 30,
  city: "Exampleville",
  isStudent: false,
  grades: [95, 88, 92]
};

// Objekt in JSON-Format umwandeln
var jsonPerson = JSON.stringify(person);

console.log(jsonPerson);

```
* Json Data Parsen
```js
// JSON-String
var jsonString = '{"name":"Alice","age":25,"city":"Sampletown","isStudent":true,"grades":[85,90,88]}';

// JSON-String in ein JavaScript-Objekt umwandeln
var parsedPerson = JSON.parse(jsonString);

console.log(parsedPerson.name); // Ausgabe: Alice
console.log(parsedPerson.age); // Ausgabe: 25

```

* JSON EINLESEN

```js
const fs = require('fs');

// Pfad zur JSON-Datei
const filePath = 'data.json';

// JSON-Datei einlesen
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }

  // JSON-String in ein JavaScript-Objekt umwandeln
  const jsonObj = JSON.parse(data);

  // Ausgabe der Daten
  console.log("Name: " + jsonObj.name);
  console.log("Alter: " + jsonObj.age);
  console.log("Stadt: " + jsonObj.city);
});

```

* In neue File schreiben


```js
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

```

* In exestierende File Schreiben

```js
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

```
