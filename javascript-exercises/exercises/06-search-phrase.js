const searchWordInPhrase = (phrase, word) => {
  let counter = 0;
  const wordSplit = word.toLowerCase();
  const phraseSplit = phrase.toLowerCase().split(" ");

  phraseSplit.map((item) => {
    if (item === wordSplit) {
      counter += 1;
    }
  });

  return counter;
}

console.log(searchWordInPhrase("Hi, i am an example example example", "EXAMPLE"))