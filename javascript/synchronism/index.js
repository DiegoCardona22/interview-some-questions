// Sincronismo es la ejecución de tareas en secuencia, una tras otra.

const add = (a, b) => a + b;

console.log(add(1, 2)); // 3

// Asincronismo es la ejecución de tareas en paralelo o en momentos indeterminados en el tiempo.

const addAsync = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

addAsync(1, 2, (result) => {
  console.log(result); // 3
});