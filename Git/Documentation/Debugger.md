* Debugging ist der Prozess des Identifizierens, Analysierens und Behebens von Fehlern oder Bugs in einem Computerprogramm
oder System. Ein Bug ist ein Fehler oder ein unerwartetes Verhalten, das dazu führen kann, dass das Programm nicht wie beabsichtigt funktioniert.
Debugging ist ein entscheidender Schritt im Softwareentwicklungsprozess,
um sicherzustellen, dass ein Programm korrekt und fehlerfrei läuft.

* Während des Debugging-Prozesses versuchen Entwickler, den Ursprung des Fehlers zu lokalisieren, 
indem sie den Code sorgfältig überprüfen, Daten analysieren und Testläufe durchführen. Hierbei kommen verschiedene Techniken und Tools zum Einsatz, 
darunter:

* Print-Statements: Das Hinzufügen von Anweisungen im Code, um bestimmte Werte oder Nachrichten während der Ausführung anzuzeigen.

* Debugger-Tools: Spezielle Softwarewerkzeuge, die es Entwicklern ermöglichen, den Code schrittweise zu durchlaufen, 
Variablen zu überwachen und den Zustand des Programms zu analysieren.

* Logging: Das Aufzeichnen von Ereignissen und Informationen während der Ausführung des Programms in Protokolldateien, 
um das Verhalten nachvollziehen zu können.

* Automatisierte Tests: Die Erstellung von Testfällen, um sicherzustellen, dass verschiedene Teile des Codes korrekt funktionieren.

* Code-Profiling: Die Analyse der Laufzeitleistung des Codes, um Engpässe oder ineffiziente Bereiche zu identifizieren.

Das Ziel des Debuggings besteht darin, Fehler zu finden und zu beseitigen, um sicherzustellen, 
dass das Programm wie erwartet funktioniert. Es ist ein wesentlicher Schritt im Entwicklungsprozess, 
da selbst kleine Fehler zu unerwartetem Verhalten führen können, das die Benutzererfahrung beeinträchtigt 
oder die Funktionalität des Programms beeinträchtigt.


* Print

```js
// Einfaches Logging mit console.log
console.log("Start des Programms");

// Anzeige von Werten
let x = 10;
console.log("Der Wert von x ist: ", x);

```

* Logging

```js
// Logging in eine Datei oder Konsole
const fs = require('fs');

fs.appendFileSync('debug.log', 'Eintrag für Debugging\n');

```

* Automatisierte Tests

```js
test('Funktion add sollte zwei Zahlen korrekt addieren', () => {
  expect(add(2, 3)).toBe(5);
});

```

* Code-Profiling

```js
console.time('Berechnungszeit');
// Hier kommt der zu überprüfende Code
console.timeEnd('Berechnungszeit');
```
