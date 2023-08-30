const stepsDrawer = (steps) => {
  let drawer = "";

  for (let i = 0; i <= steps - 1; i++) {
    drawer += `${"[-]".repeat(i + 1)}\n`;
  }

  return drawer;
}

console.log(stepsDrawer(10));