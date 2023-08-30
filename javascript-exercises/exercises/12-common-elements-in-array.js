const commonElementsInArrays = (array1, array2) => {
  const newArray = array1.filter((item) => array2.includes(item));
  return newArray;
}

console.log(commonElementsInArrays([1, "2", true, 100], [2, 200, true, "2"]))