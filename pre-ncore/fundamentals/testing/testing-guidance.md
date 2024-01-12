# Testing

The lecture is designed to introduce the students to npm, packages, using the jest testing framework and the main concepts of TDD. The lecture will focus on these principles with this seminar being the practical demonstration of how to approach breaking a function down into different behaviours to make it easier to solve.

## Setup

-   function
-   test file **tests**

## Introduce the kata to solve

```
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

## Setup the tests

-   Set up package.json - what is this?
-   npm init
-   installing jest
-   test script

## Start with the simplest test

-   Whats the simplest behaviour? **how can we make this simpler?**

-   Start with either empty string or single string?

```
test('returns the only character from a single char string', () => {
  expect(getMiddleChar('a')).toBe('a');
});

function getMiddleChar(str) {
  return str[0];
}
```

## Build up functionality

-   focus on behaviours - demo numbers etc

```
// only need an example of this. Could add some more assertions for longer strings but not required as the behaviour doesn't change.
// if they're unsure err on the side of caution and write more assertions - too many is fine, too few is bad
test('returns the middle character from an odd length string', () => {
 expect(getMiddleChar('abc')).toBe('b');
});

function getMiddleChar(str) {
 const midIndex = Math.floor(str.length / 2);
 return str[midIndex];
}
```

```
test('returns the middle 2 characters from an even length string', () => {
  expect(getMiddleChar('abcd')).toBe('bc');
});

function getMiddleChar(str) {
  const midIndex = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str[midIndex - 1] + str[midIndex];
  }
  return str[midIndex];
}
```

```
test('returns an empty string if the input string is empty', () => {
  expect(getMiddleChar('')).toBe('');
});

function getMiddleChar(str) {
  if (str.length === 0) return '';
  const midIndex = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str[midIndex - 1] + str[midIndex];
  }
  return str[midIndex];
}
```

If they're struggling to think of the next test a useful hint is to think of things that we haven't covered yet that the function needs to do. How can we change the inputs to break our current implementation, what doesn't it currently handle?

Make a point that we are going to repeat this process as many times as is necessary until the function does everything it needs to.
