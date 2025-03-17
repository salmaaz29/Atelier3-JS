const numbers = [1, 7, 10, 9, 8, 2];

// Déclaration correcte de la variable
const nv_numbers_paires = numbers.filter(x => x % 2 === 0);

// Utilisation du spread operator pour créer une copie triée
const result = [...nv_numbers_paires].sort((a, b) => a - b);
console.log(numbers);

console.log(result); // [2, 8, 10]