const uniqueValuesInArray = (array) => {
  return Array.from(new Set(array));
}

console.log(uniqueValuesInArray([1, 2, 2, 3, 4, 4, 4, 4]));