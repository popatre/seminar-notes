# Functions & Execution Contexts

The first part of this lecture aims to consolidate students' understanding of how to use functions. Differentiating clearly between when a function is declared and when it is invoked provides valuable context for the second part of the lecture where we introduce the 3 core components of an execution context diagram.

## Learning Objectives

-   Know that Node is that runtime environment we use to execute our JavaScript code
-   Understand the difference between a function declaration and invocation
-   Understand the difference between function arguments and parameters
-   Understand the use of the return keyword
-   Understand when a function may be useful
-   Know the purposes different components of an execution context diagram:

    -   Thread
    -   Variable environment
    -   Call stack

    ### **Question: Where is JavaScript begin?**

## 0. What is Node?

-   Explain that once we have written some code, we need to utilise a piece of software to execute the instructions we provide
-   Explain that we will be using something called **Node** to do this

    -   It is an example of something called a "runtime environment" (no need to elaborate on this excessively, just state that it has everything needed to run JavaScript)
    -   Originally, JavaScript could only run in browsers
    -   Node was based on Google Chrome's JavaScript engine, V8
    -   It allows us to run "server-side" JavaScript, ie on our local machines

-   Demonstrate that we can use node by writing `node <file-path>` into our terminal

## 1. What actually happens during execution?

-   It reads and executes it line by line
    -   [OPTIONAL] In v8 it uses just-in-time compilation
-   It assigns data to variables in memory

-   Go to an _execution context diagram_ to work through an example like the one below

```js
const tutor = "Jim";
const greeting = "Hello " + tutor;
console.log(greeting);
```

-   Explain the two key components (a call stack should **not** be included at this stage)

**Thread** - where our code is executed, i.e. where things are "worked out"
**Variable environment** - where variables go when we declare them, we will look here when we need to use a variable later

-   Go through the execution line by line
-   Focus on:

    -   Adding to the variable environment
    -   Reading from the variable environment
    -   Evaluating things like expressions (e.g. `'Hello ' + tutor`) in the thread

### **Question: What is an expression???**

**Note** - this is a good opportunity to define the term "expression" - a combination of data and operators/functions which will eventually work out to be a single value

## 2. What about applying the same logic again? Functions!

### **Question: Why use functions?**

-   Explain how greeting other tutors would require us repeating code - not ideal
    -   This is not _D.R.Y._ we try to say "don't repeat yourself" where it can be avoided
-   This is where functions come in

-   We have already been using functions in JavaScript - `console.log` for example

-   When we want to REPEAT behaviour, iteration is a great tool
-   When we want to REUSE behaviour, functions can help us

## 3. Declaring & invoking functions

-   Declare a function containing all the logic from the previous example

```js
function sayHello() {
    const tutor = "Jim";
    const greeting = "Hello " + tutor;
    console.log(greeting);
}
```

-   Run the file with node and highlight no log! - we **must call the function**

```js
sayHello();
```

-   Function identifier followed by parentheses is an **invocation**

## 4. Parameters & arguments

### **Question: Whats the difference between a parameter and an argument???**

-   Express the desire to make this more useful by wanting to say hello to different people
    -   Adding a **parameter** to make the function more dynamic - can accept different inputs
    -   We can treat this like any variable - just one specific to inside this function

```js
function sayHello(person) {
    // const tutor = 'Jim';
    const greeting = "Hello " + person;
    console.log(greeting);
}

sayHello(); // hello undefined
```

### **Question: If i didnt pass in an argument, what does it default to?**

-   If we provide nothing, JavaScript represents that as `undefined`

```js
const tutor = "Jim";
sayHello(tutor);
```

-   Parameter order matters!!!!

## 5. Returning

-   Functions can take any number of inputs/arguments
-   Will ALWAYS produce a single output
-   Don't we have a word for things which evaluate to a single value? - **Expressions!**

-   Try to store that single output in a variable - will be `undefined`

```js
const tutor = "Jim";
const greeting = sayHello(tutor);
console.log(greeting); // undefined
```

-   ### **Question:What do we need to make the function output an actual value?**

```js
function sayHello(person) {
    return "hello " + person;
    console.log("im not being logged");
}
const tutor = "Jim";
const greeting = sayHello(tutor);
console.log(greeting); // hello Jim
```

-   `return` also ends the function execution
    -   Anything after the `return` is _unreachable code_

## 6. What happens when JS runs code involving function calls?

-   Go to an _execution context diagram_ but now with added call stack

**Call stack** - this definition is more involved, we should build on it as we go

-   JavaScript is single-threaded
-   The call stack is going to help JS keep track of what it is currently executing
-   The first thing that happen when we run a file is that `global` gets added to the stack

Go through your code step-by-step, focussing on the following core concepts of an EC diagram:

-   global
-   function to VE - not invoked
-   new local execution context when invoked
-   thread moves there
-   call stack function
-   paramters into VE
-   returns - pops
-   carry on main thread

-   When a function is declared, it is added to the VE and the code inside is not executed
    -   **NOTE:** This is a good opportunity to acknowledge that functions are being added to the VE (the same place that all data will be added)
    -   This is because functions in JS are _first class citizens_, i.e. we can treat them as values like any other
-   When a function is invoked:
    -   A new local EC is added where there is a new local VE and where the single thread of execution is now working
    -   The function is _pushed_ to the top of the call stack
        -   The call stack is an example of a LIFO stack
        -   This is like a stack of plates: add to the top, take from the top
        -   Whatever is currently top tells JS what is currently being executed
-   The first thing that happens inside a local EC is for any parameters to be added to the VE
-   When the function finishes (or returns) then it is _popped_ off the stack and the local EC is closed
-   The thread then carries on from where it was in the global EC

## [OPTIONAL] 7. The same but more complicated!

-   If there is time, you can do a second execution context diagram with a more complicated example, e.g.

```js
function sumUpTo(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const sumUpTo3 = sumUpTo(3);
```

This demonstrates:

-   Execution of a for loop
-   Adding variables to global and local VE
-   Accessing & updating local variables

## 8. Recap

-   JS runs line-by-line, top-to-bottom
-   It is single threaded, which means only one thing can happen at a time
-   The difference between arguments and parameters
-   When a function is called it creates an execution context and its own local memory. The local memory is called a 'variable environment'
-   The call stack keeps track of the thread by pushing things on when they're called, and popping them off when they've resolved
