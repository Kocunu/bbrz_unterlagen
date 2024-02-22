// Modul für das fs um Filesystem einzulesene
const fs = require('fs');

// Pfad zur JSON-Datei
const filePath = 'test.json';

// Datei einlesen im String-Format
fs.readFile(filePath, 'utf8', (err, test) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }

  // JSON-String in ein JavaScript-Objekt umwandeln
  const jsonObj = JSON.parse(test);

  // Ausgabe der Daten
  console.log("Name: " + jsonObj.name);
  console.log("Alter: " + jsonObj.age);
  console.log("Stadt: " + jsonObj.city);
});

