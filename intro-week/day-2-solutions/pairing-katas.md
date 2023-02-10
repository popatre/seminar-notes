# Day 2

## Lunchtime

### paired - section 2- challenges - Q8 || Q9

```
function containsNoRepeats(str) {
  // This function should take a string as its argument and return true if each character appears only once and false otherwise
  // "dog"
  // 'd'
  // does the rest of the string contain a 'd'?
  // 'o'
  // does the rest of the string contain a 'o'?


  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    const restOfString = str.slice(i + 1);

    if (restOfString.indexOf(currentLetter) > -1) {
      return false;
    }
  }
  return true;
}
```

OR

```
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    const restOfString = str.slice(i + 1);

    const isRepeated = restOfString.split("").includes(currentLetter);
    if (isRepeated) return !isRepeated;
  }
  return true;
```

OR

```
const letters = str.split("");
  const isFound = letters.some((lett, i, arr) => {
    return arr.lastIndexOf(lett) !== i;
  });
  return !isFound;

```
