// Una closure es una función que recuerda el entorno en el que fue creada.
// Esto significa que una closure en JavaScript conserva los valores de las variables disponibles en el entorno en el que fue creada.
// Aunque la función sea ejecutada en un entorno diferente.


// Ejemplo 1
const saludarFamilia = (apellido) => {
  return saludarMiembroFamilia = (nombre) => {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')

saludarGomez('Pedro')
saludarGomez('Juan')

saludarPerez('Pedro')
saludarPerez('Juan')
