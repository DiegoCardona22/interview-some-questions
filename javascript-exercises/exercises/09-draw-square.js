const square = (sides) => {
    const topAndDown = topAndDownSide(sides);
    const middle = middleSide(sides);
    return `${topAndDown}\n${middle}${topAndDown}`;
}

const middleSide = (sides) => {
  let middle = "";

  for (let i = 0; i < sides - 2; i++) {
    middle += `*${" ".repeat(sides - 2)}*\n`;
  }
  
  return middle;
}

const topAndDownSide = (sides) => "*".repeat(sides);

console.log(square(10));