const mostUsedWord = (word) => {
  const splittedWord = word.split("");
  let mostUsedLetter = "";

  splittedWord.forEach(element => {
    if (mostUsedLetter === "") {
      mostUsedLetter = element;
    } else {
      if (splittedWord.filter(letter => letter === element).length > splittedWord.filter(letter => letter === mostUsedLetter).length) {
        mostUsedLetter = element;
      }
    }
  });

  return mostUsedLetter;
}

console.log(mostUsedWord("heelloooooo"));