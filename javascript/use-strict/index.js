"use strict";
console.log(x);
var x = 10;

function memoize(func) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;

    return result;
  };
}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci = memoize(fibonacci);

console.time('fibonacci');
console.log(fibonacci(30));
console.log(fibonacci(30));
console.timeEnd('fibonacci');