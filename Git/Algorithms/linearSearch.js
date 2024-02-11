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

