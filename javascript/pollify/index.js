// Verificar si la función startsWith ya está disponible en el entorno
if (!String.prototype.startsWith) {
  // Si no está disponible, definir una implementación alternativa
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

// Utilizar la función startsWith
var str = "Hello, world!";
console.log(str.startsWith("Hello")); // Output: true
console.log(str.startsWith("world", 7)); // Output: true