const sumAllElementsInsideArray = (array = []) => {
  const total = array.reduce((acc, cur) => acc += cur, 0);
  return String(total);
}

console.log(sumAllElementsInsideArray([1, 2, 3, 4, 12, 1, 2, 3]))