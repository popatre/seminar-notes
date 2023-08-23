# Errors and Debugging

# Errors and Debugging

## Lecture Outline

This lecture is designed to demystify error outputs and provide a logical approach to solving errors when they arise. The main takeaway should be familiarity with the step-by-step experimentation of using well-placed `console.log`s and carefully reading the output to help us work towards a solution.

We should use code that demonstrates different kinds of bugs, including multiple kinds of errors as well as bugs that don't cause errors to be thrown. It's recommended that you have code already written to simulate the situation where they don't necessarily know what the issues are There is an example of some code that can be used to this effect in the accompanying resources folder. There is, as always

## Learning Objectives

-   Understand when run time errors occur in Javascript
-   Understand how to read stack traces
-   Understand a general strategy for debugging
-   Be able to use console.logs to debug incorrect behaviour

## Guidance

The code snippets below are from the code example in the accompanying resources folder.

### 1. Introducing errors

-   Who has felt overwhelmed by errors?

-   Explain that the experience of seeing errors continues to be a regular occurence even for senior developers

-   Highlight that this lecture is not about _preventing_ errors - they are unavoidable - instead it is about understanding how to approach the process of debugging

### 2. Reading error output

-   Attempt to run some code that will cause a syntax error e.g. missing bracket

             node main.js

```js
function squareNums(nums) {
  return nums.map(squareNum;
}
```

-   Using your favourite diagramming tool, take the opportunity to break down all the key bits of information:

    -   The file it's from
    -   The line number (and in some examples, column number)
    -   The specific part of the line
    -   The kind of error: `SyntaxError`
    -   Specific error description
    -   The stack trace - much of this is currently unhelpful, but we'll come back to it shortly

-   Explain that syntax is the first hurdle. Cant run other stuff

-   Therefore, a syntax error doesn't mean that there aren't other potential problems lurking

-   Fix the error, and run the file again

### 3. Reading the stack trace (errors across multiple files/functions)

-   Make sure that the next error we see is both:

    -   a runtime error (e.g. reference error)
    -   a result of calling a function in another file. This allows us to see more in the stack trace than previously

-   Explain that these kinds of errors happen as the code is being executed. Node has done the syntax check ✅ but has been stopped in its tracks by an error happening _during_ execution

```js
// --- main.js ---

const squares = tools.squareNum(nums);

// this line number will be logged:
const threeDigitSquares = tools.get3DigitNums(squares);

// --- tools.js ---

function get3DigitNums(nums) {
    return nums.filter((num) => {
        // this line number will be logged also:
        const numString = nun.toString();
        return (numString.length = 3);
    });
}
```

-   stack trace now shows us not only the file path/line number where the error occured, but also the file path/line number where the function (the one being executed when the error occurred) was called

         What is a reference error?

-   Fix the error, run the file again

        Code will cause typeError which is the next bit

### 4. Following the stack trace with a trail of logs

-   Cause an error that is going to require a series of `console.log`s to help us debug it. A good idea is to cause an error along the lines of `cannot read <property> of undefined`

-   With a series of logs, try to work out why the value is not what you expect it to be

-   Highlight that the stack trace will help identify where we can look next to locate the source of the issue

-   This is a process of investigating **one step at a time** to try and discover what the problem is and where it has arisen

-   As you are logging each value, make sure to ask yourself outloud: "what value did I expect this to have?" and use the result of the log to answer "what value does it actually have?"

-   An example of the order you might log values is below

```js
// --- tools.js ---

function squareNums(nums) {
    console.log(nums); // LOG 4
    console.log(nums.map(squareNum)); // LOG 5
    return nums.map(squareNum);
}

function get3DigitNums(nums) {
    console.log(nums); // LOG 2
    return nums.filter((num) => {
        console.log(num); // LOG 1
        const numString = num.toString();
        return (numString.length = 3);
    });
}

// --- main.js ---

const squares = tools.squareNum(nums);
console.log(squares); // LOG 3

const threeDigitSquares = tools.get3DigitNums(squares);
```

-   The aim of this process is to hone in on the specific location of the problem. If you reduce the number of lines of code you're looking at trying to debug, your life is much easier

-   In this particular example, `LOG 5` will show you that the result of the map is an array of all `undefined` values, suggesting the problem is with the iteratee, as it determines the contents of the resulting array. When we investigate the iteratee, we can see it is missing a `return` keyword, which results in always returning `undefined`

-   Fix this error, and run the file again

        The error goes away - but the result is still wrong - addressed in next bit

        recap the errors seen in a TLDR

### 5. Solving bugs that aren't errors - more logs!

-   Showcase at least 1 more bug where there is no runtime error (i.e. the execution of the code is not interrupted) but the outcome is not what is expected

-   To solve this, we are going to follow the same process as before - working our way back through a series of logs

-   We won't have the stack trace this time but that's okay - we've done it once, now let's apply the same principles again

-   In the provided example, our filter is broken due to a common mistake in the predicate's return value

```js
// --- tools.js ---

function squareNums(nums) {
    return nums.map(squareNum);
}

function get3DigitNums(nums) {
    console.log(nums); // LOG 1
    const only3DigitNums = nums.filter((num) => {
        const numString = num.toString();
        console.log(numString); // LOG 3
        console.log((numString.length = 3)); // LOG 4
        return (numString.length = 3);
    });
    console.log(only3DigitNums); // LOG 2
    return only3DigitNums;
}
```

-   Identify which logs are giving us answers that are different from what we expect

-   Compare what we are getting to our expectations

    -   LOG 2 reveals that the filter isn't removing any removing any values
    -   LOG 4 reveals that the return value, which we expect to be a boolean, is in fact a number

-   Try to connect these mysteries by asking pointed questions

    -   How does filter work?
    -   How does it decide what values to keep?
    -   What should I be returning from the predicate?

-   Following on from the previous lecture on using documentation, here you can use the docs to help answer these questions

-   With all this information, we can work out that the value being returned is "truthy" (as opposed to the desired boolean), which is why no values are being removed

-   There is a deductive leap that must be made here to recognise that we have erroneously used one `=` rather than `===`, but acknowledge that we have made our lives a lot easier by seriously narrowing down the area that we have to apply that reasoning to

### 6. Conclusions

-   Reiterate that errors are not something we can avoid, but now with all the information we have, they are nothing to be afraid of

-   Highlight the key points:
    -   Use any error output in the console to maximum benefit - there is a ton of information in our hands already, we just need to read it carefully
    -   Use `console.log` to compare what you expect a value to be to what it actually is. Do this slowly, one value at a time, to narrow down the region where the issue might be
