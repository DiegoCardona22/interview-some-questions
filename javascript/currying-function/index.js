// Una curriying function es una función que recibe un argumento, 
// lo procesa y retorna otra función que recibe el siguiente argumento y así sucesivamente hasta que retorna el resultado final.

// Ejemplo 1

function suma(a) {
  return function(b) {
    return a + b
  }
}

const suma5 = suma(5)
console.log(suma5(10))

