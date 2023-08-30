// Un Event Loop es un bucle que se encarga de ejecutar el código y manejar los eventos de un programa.
// En el caso de JavaScript, el Event Loop se encarga de manejar la ejecución de nuestro código, 
// las funciones que se están ejecutando, las funciones que están pendientes por ejecutarse, 
// las funciones que están pendientes por ejecutarse y que son parte de la cola de tareas,
// las funciones que son parte de la cola de microtareas, 
// las funciones que son parte de la cola de tareas, pero que se están ejecutando en este momento, etc.

// Ejemplo 1
console.log('a')

setTimeout(() => console.log('b'), 0)

console.log('c')

// Ejemplo 2

setTimeout(() => console.log('d'), 2000)

for (let i = 0; i < 10000000000; i++) {
  
}

console.log('e')
