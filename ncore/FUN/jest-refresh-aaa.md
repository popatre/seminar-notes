# Jest refresh/AAA

See plan for overview

https://docs.google.com/document/d/18TUdEkdm8EVhgKuLaYSTaxahknZfcCnCIgCgp_b2p0s/edit

```js
/*
  The function getMiddleChar should return the middle character of a string. If the string is of even length, return the middle two characters.
  E.g.
  'north' should return 'r'
  'coders' should return 'de'
*/

function getMiddleChar(str) {
    //
}
```

## test 1 - single value

```js
test("returns the only character from a single char string", () => {
    //arrange
    const input = "a";
    const expected = "a";
    //act
    const actual = getMiddleChar(input);
    //assert
    expect(actual).toBe(expected);
});

function getMiddleChar(str) {
    return str[0];
}
```

## test 2 -

```js
test("returns the middle character from an odd length string", () => {
    //arrange
    const input = "abc";
    const expected = "b";
    //act
    const actual = getMiddleChar(input);
    //assert
    expect(actual).toBe(expected);
});

function getMiddleChar(str) {
    const midIndex = Math.floor(str.length / 2);
    return str[midIndex];
}
```

## test 3

```js
test("returns the middle 2 characters from an even length string", () => {
    const input = "abcd";
    const expected = "bc";
    //act
    const actual = getMiddleChar(input);
    //assert
    expect(actual).toBe(expected);
});

function getMiddleChar(str) {
    const midIndex = Math.floor(str.length / 2);
    if (str.length % 2 === 0) {
        return str[midIndex - 1] + str[midIndex];
    }
    return str[midIndex];
}
```

## test 4

```js
test("returns an empty string if the input string is empty", () => {
    const input = "";
    const expected = "";
    //act
    const actual = getMiddleChar(input);
    //assert
    expect(actual).toBe(expected);
});

function getMiddleChar(str) {
    if (str.length === 0) return "";
    const midIndex = Math.floor(str.length / 2);
    if (str.length % 2 === 0) {
        return str[midIndex - 1] + str[midIndex];
    }
    return str[midIndex];
}
```
