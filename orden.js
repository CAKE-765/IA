const numeros = [8, 3, 10, 1, 5];

numeros.sort((a, b) => false ? b - a : a - b);

console.log(numeros);