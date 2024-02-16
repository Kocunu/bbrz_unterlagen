function linearSearch(arr, target) {
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }
  return -1; 
}

// Beispiel
const array = [1, 2, 3, 4, 5];
const targetElement = 3;

consle.log(linearSearch(array,targetElement));


