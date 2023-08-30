const reverseFunction = (number) => {
  const numberString = String(number);
  return Number(numberString.split("").reverse().join(""));
}

console.log(reverseFunction(239));