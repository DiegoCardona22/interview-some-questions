const calcSecondLastNumberInArray = (array) => {
  return Math.max(...array.filter((number) => number !== Math.max(...array)));
}

console.log(calcSecondLastNumberInArray([1, 2, 3, 4, 10, 6, 7, 8]));

const calcMaxNumberInArray = (array) => {
  return Math.max(...array);
}

console.log(calcMaxNumberInArray([1, 2, 3, 4, 10, 6, 7, 8]));

const calcThirdLastNumberInArray = (array) => {
  return Math.max(...array.filter((number) => number !== Math.max(...array) && number !== Math.max(...array.filter((number) => number !== Math.max(...array)))));
}

console.log(calcThirdLastNumberInArray([1, 2, 3, 4, 10, 6, 7, 8]));