// Call es un método que tienen todas las funciones que nos permite llamarlas y definir el this que van a tener.
// Apply es similar a call, pero los argumentos los recibe en un arreglo.
// Bind es similar a call, pero en lugar de llamar la función, nos retorna una nueva función con el this cambiado.

// Ejemplo 1
const juan = {
  nombre: 'Juan',
  apellido: 'Gomez'
}

function saludar(veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for (let i = 0; i < veces; i++) {
    console.log(str)
  }
}

// Call
saludar.call(juan, 3, true)

// Apply
const params = [3, true]
saludar.apply(juan, params)

// Bind
const saludarJuan = saludar.bind(juan, 3, true)
saludarJuan()