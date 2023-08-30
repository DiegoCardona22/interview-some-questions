// Las funciones puras son aquellas que no modifican el estado de la aplicación

const add = (a, b) => a + b;

console.log(add(1, 2)); // 3

// Las funciones impuras son aquellas que modifican el estado de la aplicación

let a = 1;
const addImpure = (b) => a + b;

console.log(addImpure(2)); // 3
