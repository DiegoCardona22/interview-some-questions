// Un for in itera sobre las propiedades de un objeto
// Un for of itera sobre los valores de un objeto iterable

const iterable = [1, 2, 3, 4, 5];

for (const value of iterable) {
  if (value % 2 === 0) {
    console.log(value);
  }
}

const person = {
  name: 'Juan',
  age: 25,
  country: 'MX',
};

for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}