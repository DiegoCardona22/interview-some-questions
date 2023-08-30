const calcDividers = (num) => {
  let dividers = `${0}`;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      dividers += ` ${i}`;
    }
  }

  return dividers;
};

console.log(calcDividers(10));