// Functional classes en javascript son clases que no tienen estado, es decir, no tienen propiedades, solo metodos.

// Ejemplo 1
function Person(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
}

Person.prototype.greet = function () {
  console.log(`Hola, mi nombre es ${this.name}`);
}

const person = new Person('Juan', 25, 'MX');
person.greet();
console.log(person);