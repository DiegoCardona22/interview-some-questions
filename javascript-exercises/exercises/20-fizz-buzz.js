const fizzBuzzFunction = (number) => {
  let fizzBuzz = "";

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      fizzBuzz += "Fizz";
    }

    if (i % 5 === 0) {
      fizzBuzz += "Buzz";
    }

    fizzBuzz += "\n";
  }

  return fizzBuzz;
}

console.log(fizzBuzzFunction(100));