```
const containsFile = (folder, requestedFile) => {
  // BASE CASE - if we find the searchTerm straight away,
  // no need to keep checking - return true
  if (item.hasOwnProperty(searchTerm)) return true;

  // If the item is an object, it could contain the search term
  if (typeof item === 'object') {
    // Loop over the object, to check for the key

    for (const fileName in folder) {

      // RECURSIVE CASE - check for the fileName in all of the
      // items with a recursive call - if we find an item
      // no need to keep checking - return true

      if (containsKey(folder[fileName], searchTerm)) return true;
    }
  }
  // BASE CASE - if no key is found, return false
  return false;
};
```

```
describe('containsFile', () => {
  it('returns true when passed an object, with specified property', () => {
    const input = { catPic: 'a photo of a cat' };
    expect(containsFile(input, 'catPic')).toBe(true);
  });
  it('returns false when passed an object, without specified key', () => {
    const input = { dogPic: 'a photo of a dog' };
    expect(containsFile(input, 'specialK')).toBe(false);
  });
  it('returns true when passed an object, with specified key nested', () => {
    const input = { dogPic: "a photo of a dog", cats: { otherCat: 'a photo of a different cat', catPic: 'a photo of a cat' } };
    expect(containsFile(input, 'specialKey')).toBe(true);
  });
  it('returns false when passed a deeply nested object that does not contain specified key', () => {
    const input = { dogs: { dogPic: 'a photo of a dog' } };
    expect(containsFile(input, 'specialKey')).toBe(false);
  });
});
```
