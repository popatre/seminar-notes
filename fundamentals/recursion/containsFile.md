```
function containsFile(folder, requestedFile) {
  // BASE CASE - if we find the searchTerm straight away,
  // no need to keep checking - return true
    if (folder.hasOwnProperty(requestedFile)) return true;

    for (const title in folder) {
      // If the item is an object, it could contain the search term
        if (typeof folder[title] === "object") {
            const newFolderFound = folder[title];

      // RECURSIVE CASE - check for the fileName in all of the
      // items with a recursive call - if we find an item
      // no need to keep checking - return true

            return containsFile(newFolderFound, "catPic");
        }
    }
 // BASE CASE - if no key is found, return false
    return false;
}

```

```
describe('containsFile', () => {
  it('returns true when passed an object, with specified property', () => {
    const input = { catPic: 'a photo of a cat' };
    expect(containsFile(input, 'catPic')).toBe(true);
  });
  it('returns false when passed an object, without specified key', () => {
    const input = { dogPic: 'a photo of a dog' };
    expect(containsFile(input, 'catPic')).toBe(false);
  });
  it('returns true when passed an object, with specified key nested', () => {
    const input = { dogPic: "a photo of a dog", cats: { otherCat: 'a photo of a different cat', catPic: 'a photo of a cat' } };
    expect(containsFile(input, 'catPic')).toBe(true);
  });
  it('returns false when passed a deeply nested object that does not contain specified key', () => {
    const input = { dogs: { dogPic: 'a photo of a dog' } };
    expect(containsFile(input, 'catPic')).toBe(false);
  });
});
```
