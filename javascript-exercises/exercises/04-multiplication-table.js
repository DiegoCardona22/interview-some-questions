const multiplicationTableFunction1 = (number) => {
  let result = "";

  for (let i = 0; i <= 10; i++) {
    result += `${number} * ${i} = ${number * i}\n`
  }

  return result;
}

console.log(multiplicationTableFunction1(5));