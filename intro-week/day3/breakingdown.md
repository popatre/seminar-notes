# Breaking down a problem

-   Recap parameters and arguments
-   rest parameter

```js
function createGreeting(...names) {
    const greeting = `Hello ${names.join(", ")}`;
    return greeting;
}
```

## Explain pseudo coding

-   high level steps
-   any language can do it

Want to do Hello Vel, Jim and Liam

-   Create greeting variable with first name
-   iterate over the other names
-   add each name with comma, space and value
-   at end, add last name with and, space and value
-   output greeting

```js
function sayHello(...names) {
    let greeting = `Hello ${names[0]}`;

    for (let i = 1; i < names.length - 1; i++) {
        greeting += `, ${names[i]}`;
    }

    if (names.length > 1) {
        greeting += ` and ${names.at(-1)}`;
    }

    return greeting;
}

const greet = sayHello("Jim", "Vel", "Modou", "Tim");

console.log(greet);
```

-   most problem solving before

-   readability main priority, speed later

```js
function createGreeting(...names) {
    let greeting = `Hello ${names[0]}`;
    for (let i = 1; i < names.length; i++) {
        if (i === names.length - 1) {
            greeting += ` and ${names[i]}`;
        } else {
            greeting += `, ${names[i]}`;
        }
    }
    return greeting;
}
```

-   Can now be used in another pseudo code

-   go over tips -

Information required - Do you have enough data to work out what you need to do? e.g. If you want an element from an array, do you know it's index? value from an object, do you know what key it's on? Check if something has been done before, are there enough variables so that you can work out if this is the first time or not?

Single step - can JS do what you want in a single step? You can do if's, loops, comparisons etc with native language features. You also have inbuilt methods that can be used, e.g. convert a string to lowercase -> either write several steps to produce this (create a variable to store it, loop over the original etc) or use the String.toLowerCase() will produce exactly what you're looking for. A nice analogy for this is each feature and method that we learn to use is a tool on our toolbelt. We will collect more over time and pick the right tool for the job. If we don't have a tool that does the job we want, we'll make one using what we already have (variables, loops and if's.)

## Do another

```js
/*
You are organising a dev conference with talks in the morning and afternoon. Write a function getFullDayGuests that takes two arrays of names. 
This function should return a new list of attendees who are attending both the morning and afternoon sessions. 

e.g. 
const morningList = ['Sam', 'Sarah', 'Saleh']
const afternoonList = ['Sam', 'Stephen', 'Sena']
getFullDayGuests(morningList, afternoonList) // ['Sam']
*/
```
