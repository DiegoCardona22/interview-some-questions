const wordIsAnagram = (word1, word2) => {
  const cleanWord1 = word1.replace(/[^\w]/gi, "").toLowerCase();
  const cleanWord2 = word2.replace(/[^\w]/gi, "").toLowerCase();

  if (cleanWord1.length === cleanWord2.length) {
    return true;
  }

  return false;
}

console.log(wordIsAnagram("sergio", "riesgo"));