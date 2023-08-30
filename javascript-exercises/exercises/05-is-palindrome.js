const phraseIsPalindrome = (phrase) => {
  const reversePhrase = phrase.split("").reverse().join("").trim();

  if (reversePhrase === phrase.trim()) {
    return true;
  }

  return false;
}

console.log(phraseIsPalindrome("    ala   "));