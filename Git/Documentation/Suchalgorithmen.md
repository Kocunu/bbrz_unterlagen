# Suchalgorithmen

`Definition`
* Ein Suchalgorithmen ist ein Verfahren, bei dem Schritt für Schritt Daten innerhalb einer Datensammlung(Array) ausfindig gemacht werden

Wie beim Sortieralgorithmen gehört auch Suchalgorithmen zu den grundlegenden Methoden der Informatik.
Wie beim Sortieralgorithmen gibt es auch hier verschieden Arten von Sortieralgorithmen und für jede dieser Arten unterschiedliche Anwendung

* Wichtig zu Merken ist das die Komplexität der Laufzeit immer eine Rolle spielt dabei.


`Anwendung`
* Wie es der Name bereits verrät, werden mithilfe von Suchalgorithmen Daten, Listen oder Baumstrukturen durchsucht. Wann welcher Algorithmus verwendet wird, kannst Du den folgenden Abschnitten entnehmen.

`Arten von Suchalgorithmen`
* Einfache Suchalgorithmen
    * Sie werden meist abstrakt implementiert
    * Können für vielzahl von kleineren Problemen eingesetzt werden
    * Vorteil: Einfach
    * Nachteil: Meist relative lange Laufzeit
* Heuristische Suchalgorithmen
    * Genaure Information über die durchsuchende Menge (Verteilung der Daten)
    * Heuristik: Versteht man ein Vorgehen mit der Lösungsstrategien für ein Prolem schneller gefunden werden kann
* Weitere Suchverfahren (Nicht relevant für uns)
    *  Darunter zählen evolutionäre Algorithmen, Suchverfahren für Zeichenketten oder beispielsweise die Adversarial Search, die vor allem im Bereich der künstlichen Intelligenz eingesetzt wird.


`Beispiele`

## Lineare Suche
* Zu den einfachen Suchalgorithmen gehört die lineare oder auch sequentielle Suche. Sie wird in der Regel bei ungeordneten Arrays verwendet und eignet sich vor allem bei eher kleineren Datenmengen.
    - Ein einfaches Beispiel für eine lineare Suche: Durchsuche eine Datenmenge nach dem kleinsten oder größten Element. Dabei musst Du die Daten durchgehen und alle Elemente miteinander vergleichen. Dadurch steigt die benötigte Anzahl an Vergleichen ebenfalls linear an – was die lineare Suche meist nicht besonders schnell macht.

* Iteration durch ein Menge von Elementen einer nach dem anderen
* Laufzeit Komplexität: O(n)

* Nachteile: 
    - Langsam für große Mengen von Daten
* Vorteil: 
    - Schnell für kleine Mengen von Daten
    - Muss nicht Sortiert werden
    - Sehr gut bei Daten die nicht zufällig verstreut sind

`Pseudocode`
```{r, tidy=FALSE, eval=FALSE, highlight=FALSE }
Funktion lineareSuche(Array arr, Zielwert target)
    für jeden Index i von 0 bis zur Länge von arr - 1
        falls arr[i] gleich target ist
            gib i zurück // Element gefunden, gibt den Index zurück
    gib -1 zurück // Element nicht gefunden
Ende Funktion
```

`Linear Search in Javascript`
```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Element gefunden, gibt den Index zurück
    }
  }
  return -1; // Element nicht gefunden
}

// Beispiel
const array = [1, 2, 3, 4, 5];
const targetElement = 3;

const result = linearSearch(array, targetElement);

if (result !== -1) {
  console.log(`Element ${targetElement} gefunden an Index ${result}.`);
} else {
  console.log(`Element ${targetElement} nicht gefunden.`);
}
```



## Binäre Suche
* Eine effektivere Variante ist die binäre Suche. Die Voraussetzung bei einer binären Suche ist allerdings, dass die Datenmenge vorher sortiert wurde. Bei der binären Suche wird nach dem "Teile-und-Herrsche-Prinzip" vorgegangen.

* Mittleres Element suchen und mit gesuchtem Element vergleichen

    * Ist es kleiner, suche in der rechten Hälfte weiter

    * Ist es größer, suche in der linken Hälfte

* "Neue" Datenmenge erneut halbieren und das gesuchte Element mit dem mittleren Element vergleichen

* Das ganze so lange weiter durchführen, bis das gesuchte Element gefunden wurde
<table><tbody><tr><td><strong>Suchalgorithmen</strong></td><td><strong>Vorteile</strong></td><td><strong>Nachteile</strong></td></tr><tr><td rowspan="3" style="width: 33.3333%;">Lineare Suche</td><td>Einfach zu implementieren.</td><td rowspan="3" style="width: 33.3333%;">Dauert bei großen Datenmengen sehr lange.</td></tr><tr><td>Kann auch in nicht sortierten Datenmengen verwendet werden.</td></tr><tr><td>Sortierte Daten bleiben sortiert, auch wenn ein neues Element eingefügt wird.</td></tr><tr><td rowspan="2" style="width: 33.3333%;"><a data-studyset-id="19463031" data-summary-id="71293597"  rel="nofollow" target="_blank">Binäre Suche</a></td><td>Eignet sich auch bei etwas größeren Datenmengen.</td><td rowspan="2" style="width: 33.3333%;">Die binäre Suche funktioniert nur in sortierten Datenmengen. Sollen neue Elemente eingefügt werden, müssen die Daten zunächst neu sortiert werden. </td></tr><tr><td>Eignet sich besonders gut für bereits sortierte, kleine Datensätze.</td></tr><tr><td>Interpolationssuche</td><td>Ist als Modifizierung der binären Suche schneller als diese, da durch die dynamische Wahl der Trennung meist weniger Werte durchsucht werden müssen.</td><td>Funktioniert ebenfalls nur in sortierten Datenmengen.</td></tr></tbody></table>


* Funktioniert durch das Teile und Hersche Verfahren
* Laufzeit Komplexität: O(Log n)
* Vorteil:
    - Schneller als Linear Search
    - Gut für große Mengen von Daten (Wörterbuch)
* Nachteil:
    - Muss sortiert sein
* Geht Iterrativ und mit Recursive Funktion



`Pseudocode`

```{r, tidy=FALSE, eval=FALSE, highlight=FALSE }
Funktion binaereSuche(Array arr, Zielwert target)
    links = 0
    rechts = Länge von arr - 1

    während links <= rechts
        mitte = (links + rechts) / 2

        falls arr[mitte] gleich target ist
            gib mitte zurück // Element gefunden, gibt den Index zurück
        sonst wenn arr[mitte] kleiner als target ist
            setze links = mitte + 1 // Suche in der rechten Hälfte
        sonst
            setze rechts = mitte - 1 // Suche in der linken Hälfte

    gib -1 zurück // Element nicht gefunden
Ende Funktion
```

`Binary Search in Javascript`

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Element gefunden, gibt den Index zurück
    } else if (arr[mid] < target) {
      left = mid + 1; // Suche in der rechten Hälfte
    } else {
      right = mid - 1; // Suche in der linken Hälfte
    }
  }

  return -1; // Element nicht gefunden
}

// Beispiel
const array = [1, 2, 3, 4, 5];
const targetElement = 3;

const result = binarySearch(array, targetElement);

if (result !== -1) {
  console.log(`Element ${targetElement} gefunden an Index ${result}.`);
} else {
  console.log(`Element ${targetElement} nicht gefunden.`);
}
```

