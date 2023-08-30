const oddCountFunction = (startNumber, endNumber) => {
  let counterOdd = 0;

  for (let i = startNumber; i < endNumber; i++) {
    if (i % 2 !== 0) {
      counterOdd += 1;
    }
  }

  return counterOdd;
} 

console.log(oddCountFunction(1, 100));