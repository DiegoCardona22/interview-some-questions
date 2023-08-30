// Memoization en JavaScript es una técnica de programación que nos permite guardar el resultado de una función
// para que no sea necesario volver a ejecutar la función con los mismos parámetros de entrada.

// Ejemplo 1
function factorial(n) {
  if (!this.cache) {
    this.cache = {};
  }

  debugger;
  if (this.cache[n]) {
    return this.cache[n];
  }

  if (n === 1) {
    return 1;
  }

  this.cache[n] = n * factorial(n - 1);
  debugger;
  return this.cache[n];
}

console.log(factorial(5));
