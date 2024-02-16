function berechneFakultät(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * berechneFakultät(n - 1);
  }
}

let zahl = 5;
let fakultät = berechneFakultät(zahl);
console.log(`Die Fakultät von ${zahl} ist ${fakultät}`);

