// Funktion, um zu überprüfen, ob eine Zahl eine Primzahl ist
function isPrime(number) {
  if (number <= 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    // Schleife durch alle Zahlen von 2 bis zur Quadratwurzel von 'number'
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // Wenn 'number' durch 'i' teilbar ist, ist es keine Primzahl
      if (number % i === 0) {
        return false;
      }
    }
    // Wenn keine Teilbarkeit gefunden wurde, ist es eine Primzahl
    return true;
  }
}

// Testaufrufe
console.log("Ist 7 eine Primzahl?", isPrime(7));
console.log("Ist 14 eine Primzahl?", isPrime(14));
console.log("Ist 23 eine Primzahl?", isPrime(23));
console.log("Ist 1 eine Primzahl?", isPrime(1));

