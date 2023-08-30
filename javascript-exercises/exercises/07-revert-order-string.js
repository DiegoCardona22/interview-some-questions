const revertOrderFunction = (phrase) => {
  let phraseRevert = "";
  let phraseInArray = phrase.split("");

  for (let i = phraseInArray.length - 1; i >= 0; i--) {
    phraseRevert += phraseInArray[i];
  }

  return phraseRevert;
}

console.log(revertOrderFunction("hola"));