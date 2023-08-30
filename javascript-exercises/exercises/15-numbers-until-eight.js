const numbersUntilEight = (number) => {
  let numbersLessEight = `Del ${number} al 0: \n`; 

  while (number >= 0) {
    numbersLessEight += `${number}\n`;
    number = `${number - 8}`;
  }

  return numbersLessEight;
}

console.log(numbersUntilEight(100));