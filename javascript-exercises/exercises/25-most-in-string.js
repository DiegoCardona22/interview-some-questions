
function Animal(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Animal.prototype.comer = function() {
  console.log("Comiendo...");
};

function Perro(nombre, apellido) {
  Animal.call(this, nombre, apellido);
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;
Perro.prototype.ladrar = function() {
  console.log("¡Guau!");
};

var perro1 = new Perro("Max", "Fernandez");
console.log(perro1.nombre); // Imprime "Max"
console.log(perro1.apellido);
perro1.comer(); // Imprime "Comiendo..."
perro1.ladrar(); // Imprime "¡Guau!"