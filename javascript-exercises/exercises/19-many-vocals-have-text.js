const getVocals = (word) => {
  const matchedWord = word.match(/[aeiou]/gi);
  return matchedWord ? matchedWord.length : 0;
}

console.log(getVocals("3"));