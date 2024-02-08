# Sortieralgorithmus

Bei einem Sortieralgorithmus handelt es sich in der Informatik um ein Sortierverfahren, der einen Array nach dem gewünschten Suchkriterium ordnen soll.

Das funktioniert aber nur für eine streng schwache Ordnung, heißt entweder auf lexikografischer Basis – also nach Buchstaben bei einer Zeichenkette oder eben nummerisch – also nach Zahlen.

Zur Umsetzung wird also eine Menge benötigt, die sortiert werden soll, die dabei aber auch gleichzeitig die Eingabe darstellt. Das Hauptziel eines Sortieralgorithmus ist zum einen, eine gegebene Menge effizient zu ordnen und zum anderen die sortierte Liste als Ausgabe zu übergeben.

**Zwei Typen von Sortieralgorithmus**

* Vergleichsbasiert
* Vergleiche von Elementen der Liste verwendet, um die Elemente entsprechend in die richtige Reihenfolge zu tauschen
* Nicht vergleichsbasierten Verfahren
* liegt der Fokus auf die Kondition der Eingabm

**Man kann sie in zwei weiter verfahren unterteilen**

* Stabilem Sortieren
* Die Reihenfolge der Datensätze gleichbleibt, deren Sortierschlüssel auch gleich sind



* Instabilem Sortieren
* In diesem Fall verschiedene Endergebnisse nach einem Sortiervorgang vorkommen, daher auch die Bezeichnung instabil




**Komplexität**

Die Effizienz der Sortieralgorithmen ist in den meisten Fällen vom Ausgangszustand abhängig – also wie ist die Datenmenge bei der Eingabe angeordnet. Dabei wird immer zwischen Best Case, Average Case und Worst Case unterschieden.



## Bubblesort

* Anwendung:
In der Praxis wird der Sortieralgorithmus kaum verwendet. Grund hierfür ist seine sehr lange Laufzeit, weswegen sich andere Sortierverfahren deutlich besser eignen. Beispielsweise der Mergesort oder der Heapsort sind bei einem Datensatz im über vierstelligem Bereich tausendmal schneller.


* Funktion:

Beim Bubblesort Algorithmus wird ein Array – also eine Eingabe-Liste – immer paarweise von links nach rechts in einer sogenannten Bubble-Phase durchlaufen. Man startet also mit der ersten Zahl und vergleicht diese dann mit ihrem direkten Nachbarn nach dem Sortierkriterium. Sollten beide Elemente nicht in der richtigen Reihenfolge sein, werden sie ganz einfach miteinander vertauscht. Danach wird direkt das nächste Paar miteinander verglichen, bis die gesamte Liste einmal durchlaufen wurde. Die Phase wird so oft wiederholt, bis der gesamte Array vollständig sortiert ist.

1.	Phase
 
      [5] [1] [4] [9] [0] [8] [6]
 
      [1] [5] [4] [9] [0] [8] [6]
 
      [1] [4] [5] [9] [0] [8] [6]
 
      [1] [4] [5] [9] [0] [8] [6]
 
      [1] [4] [5] [0] [9] [8] [6]
 
      [1] [4] [5] [0] [8] [9] [6]
 
      [1] [4] [5] [0] [8] [6] [9]

2.	Phase
 
      [1] [4] [5] [0] [8] [6] [9]

      [1] [4] [5] [0] [8] [6] [9]

      [1] [4] [5] [0] [8] [6] [9]

      [1] [4] [0] [5] [8] [6] [9]
 
      [1] [4] [0] [5] [8] [6] [9]
 
      [1] [4] [0] [5] [6] [8] [9]
 
3.	Phase
 
      [1] [4] [0] [5] [6] [8] [9]
 
      [1] [4] [0] [5] [6] [8] [9]
 
      [1] [0] [4] [5] [6] [8] [9]
 
      [1] [0] [4] [5] [6] [8] [9]
 
      [1] [0] [4] [5] [6] [8] [9]

* Pseudocode

soll der unsortierte Bereich von links nach rechts durchlaufen werden.
Wenn das linke Element (b) größer als das rechte Element (b+1) ist,
Elemente austauschen.
Das letzte Element gilt als sortiert und kann aus dem unsortierten Bereich entfernt werden.



Prozedur BubbleSort(arr: Liste vergleichbarer Elemente)
n = Länge(arr)
wiederhole
getauscht = falsch
für i von 1 bis n-1
falls arr[i-1] > arr[i] dann
tausche(arr[i-1], arr[i])
getauscht = wahr
ende falls
ende für
n = n - 1
solange getauscht
Ende Prozedur

 
