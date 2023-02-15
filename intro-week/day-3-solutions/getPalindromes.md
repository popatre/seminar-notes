# Get pals

```
 const palindromes = words.filter((currentWord) => {
    const reversedWord = currentWord.split("").reverse().join("");
    return currentWord === reversedWord;
  });
  // const palindromes = [];
  // for (let i = 0; i < words.length; i++) {
  //   const currentWord = words[i];
  //   const reversedWord = currentWord.split("").reverse().join("");
  //   if (currentWord === reversedWord) {
  //     palindromes.push(currentWord);
  //   }
  // }
  return palindromes;
```
