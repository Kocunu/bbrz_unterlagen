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

