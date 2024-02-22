const fs = require('fs');

// Pfad zur JSON-Datei
const filePath = 'schueler.json';

// JSON-Datei einlesen
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }

  // JSON-String in ein JavaScript-Objekt umwandeln
  const schuelerObj = JSON.parse(data);

  // Ausgabe der Informationen für jeden Schüler
  schuelerObj.schueler.forEach((schueler, index) => {
    console.log(`\nSchüler ${index + 1}:`);
    console.log("Name:", schueler.name);
    console.log("Klasse:", schueler.klasse);
    console.log("Noten:", schueler.noten.join(', '));
  });
});

