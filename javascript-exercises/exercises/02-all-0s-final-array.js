const moveAll0sToEndArray = (array = []) => {
  const nonZeroElements = array.filter(item => item !== 0);
  const zeroElements = Array(array.length - nonZeroElements.length).fill(0);
  return [...nonZeroElements, ...zeroElements];
}

console.log(moveAll0sToEndArray([0, 1, 1, 0, 1, 0, 1]));