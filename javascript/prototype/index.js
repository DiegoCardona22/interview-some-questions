// Un prototype en javascript es un mecanismo por el cual un objeto puede heredar propiedades de otro objeto.

// Ejemplo 1

function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

const juan = new Persona('Juan', 'Gomez')
const erika = new Persona('Erika', 'Luna')
const arturo = new Persona('Arturo', 'Martinez')

juan.saludar()
erika.saludar()
arturo.saludar()
