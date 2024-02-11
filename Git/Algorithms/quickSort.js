function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Beispiel
const unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = quickSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

