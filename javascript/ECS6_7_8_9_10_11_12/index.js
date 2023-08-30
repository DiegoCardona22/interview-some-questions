// ECS6 For of

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
} // red

// ECS7 includes

const numbers = [1, 2, 3, 4, 5];

if (numbers.includes(3)) {
  console.log('Si se encuentra el valor 3');
}

// ECS8 padStart padEnd

const str = 'hello';

console.log(str.padStart(7, 'hi')); // hihello

console.log(str.padEnd(12, ' -----')); // hello -----

// ECS9 spread operator

const obj = {
  name: 'Oscar',
  age: 32,
  country: 'MX'
};

let { name, ...all } = obj;
console.log(name, all); // Oscar { age: 32, country: 'MX' }

// ECS10 flat

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2)); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]

// ECS11 flatMap

let otherArray = [1, 2, 3, 4, 5];

console.log(otherArray.flatMap(value => [value, value * 2])); // [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]

// ECS12 trimStart trimEnd

let hello = '      hello world';

console.log(hello);

console.log(hello.trimStart()); // hello world

let hello2 = 'hello world      ';

console.log(hello2);

console.log(hello2.trimEnd()); // hello world

// ECS13 hasOwn

let entries = [['name', 'Oscar'], ['age', 32]];

console.log(Object.fromEntries(entries)); // { name: 'Oscar', age: 32 }

let mySymbol = `My Symbol`;

let symbol = Symbol(mySymbol);