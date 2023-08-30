const maxArray = (array = []) => {
  return array.reduce((acc, cur) => (
    Math.max(acc, parseInt(cur))
  ));
}

console.log(maxArray(["1", "2", "3", "3", "2", "1", "4"]));