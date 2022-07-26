# Understanding Errors

## Day Overview

## Lecture outline

- Fear of errors
- Overwhelmed ++ in chat
- Senior devs - know how to handle
- Joy of getting different errors


### 1. Discuss common error categories

1. Can start by doing a poll as to who has felt overwhelmed by errors in the past - this is good to show how everyone will have experienced the same feelings of panic at seeing errors and that they're not alone in finding them confusing. As above, mention how they will see errors throughout their whole coding life so learning to understand them is crucial.

2. Go to the [JavaScript Errors page on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) and highlight the (helpfully grouped together!) three common errors: ReferenceError, SyntaxError, and TypeError.

3. Get suggestions for alternative ways to describe these errors:

**ReferenceError**: 'referencing an _invalid_ reference.' What constitutes an 'invalid' reference? 

Can't find error

- Referencing a variable that doesn't exist
- Referencing a variable that doesn't exist _yet_
- Referencing a variable that isn't accessible _here_ (aka scope)

**SyntaxError**: What constitutes a SyntaxError?

Syntax - how its written

- Not following the _rules_ of JS
- JS building blocks e.g. operators missing or incorrectly used

**TypeError**:

- _Using_ data wrong considering its _datatype_

## 2. Lots of examples!

1.  Run through the examples below asking them to suggest which category the error will fall in. _Note_: For the first error, make sure to highlight the 'anatomy' of an error, including:

- the file its from
- the line number
- (in later examples) a character position
- the type of error
- a more specific message about what is happening
- stack trace (don't have to go into too much into detail here)

### Examples:

#### Example 1: Syntax

```js
console.log("dave";
```

#### Example 2: Reference

```js
// const tutor = "dave";

console.log(tutor);
```

#### Example 3: Syntax

```js
// const tutor = "dave";

console.log(tutor;
```

First and foremost a line of JS needs to be syntactically sound before variables can be evaluated etc, so we get a SyntaxError rather than a ReferenceError.

#### Example 4: Type

Bonus points - why does this not work?

```js
const tutor = 'dave';

tutor();
```

#### Example 5: Reference

```js
// const tutor = "dave";

tutor();
```

Bound to trip some people up as there are two problems here. However, JS will _first_ try and find the variable and only then would try to invoke it as if its a function. Hence, meets the ReferenceError first.

#### Example 6: Type

```js
const count = 10;

count = count + 1;
```

Again, could trip people up because variables/references are involved. Key thing here is that the variable _itself_ isn't invalid - the action we're trying to perform (aka how we're using the variable) is incorrect considering it is a constant.

#### Example 7: Reference

```js
let count = 10;

count = Count + 1;
```

A cheeky one to highlight that casing matters in JS variables.

#### Example 8: Reference

```js
if (true) {
  let myName = 'izzi';
}

console.log(myName);
```

This is a soft introduction to scope - we only have access to that variable inside the `if` statement's code block. So even though the variable is 'valid'/exists in some part of the code, we can't access it from our console.log outside the `if`.




### Extras

#### Example 9: Reference

```js
const tutor = 'Dave';

tutors.push("R")

```

#### Example 10: type

```js
const tutor = 'Dave';

tutor.push("R")

```

#### Example 11: type

Bonus - why is there not a splice method?

```js
const tutor = 'Dave';

tutor.splice(5, 0, "R")

```

#### Example 12:Syntax

```js
const tutors === [];

tutors.push(dave)

```

#### Example 13: Reference

```js
const tutors = [];

tutors.push(dave)

```



Questions

Look at today's sprint section
