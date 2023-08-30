String.prototype.repetitiveString = function(timesToRepeat) {
  return this.repeat(timesToRepeat);
}

const repetitiveString = (word, timesToRepeat) => {
  return word.repetitiveString(timesToRepeat);
}

console.log(repetitiveString('abc', 3));
