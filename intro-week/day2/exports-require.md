# Guidance

### 1. Primitive data types

#### Learning objectives

-   Export/require primitive variables
-   Show that the variable in the receiving file is _new_ and can be named differently

#### Guidance

## Questions

Intro different files -

        Why might we want to have code in different files?

1. Create your two files and discuss how you may want to refer to data that is inside one file from another. Introduce `module.exports` and `require` as a tool for this

```js
// file1.js

const myName = "jonathan";
module.exports = myName;

// file2.js

const myName = require("./file1.js");
console.log(myName); // get 'philippa'
```

2.  While things are simple, show that the variable in `file2` is new and does not need to match the variable name in the exporting file.

        Can ask students to guess what will happen when names are different as many students may assume `undefined` or a ReferenceError.

```js
// file1.js

const name = "philippa";
module.exports = name;

// file2.js

const mystery = require("./file1.js");
console.log(mystery); // still get 'philippa'
```

### 2. Peek under the `module.exports` hood

1.  What is module.exports? console.log the object

2.  Can show here that when we _don't_ explicitly make an exports statement, an empty object is exported by default.

```js
// file1.js

const name = "philippa";

// No export statement even though a variable declared

// file2.js

const mystery = require("./file1.js");
console.log(mystery); // logs {}
```

### 3. Complex data types: objects (or arrays) containing primitive values - Multiple exports

#### Guidance

1.  Sticking with primitive data types initially, ask how we could export multiple things from our file. They may suggest to have multiple `module.exports` lines, one for each variable. Show how this would simply overwrite the previous exports value, referring back to the `module` object and how we are assigning a value to the `exports` property.

        How can we export more than one thing?

```js
// file1.js

const name1 = "eli";
const name2 = "chipie";
module.exports = name1;
module.exports = name2;

// file2.js

const names = require("./file1.js");
console.log(names); // logs 'chipie'
```

2.  To export multiple things, try and elicit from students that we need a complex datatype like object or array that can contain all of our data. Ask how we can now access the individual values in `file2` - we can use _dot notation_ on our required-in object.

        Can only export one thing - have to package it up

```js
// file1.js

const name1 = "philippa";
const name2 = "izzi";
const multipleNames = { name1: name1, name2: name2 }; // use long-hand syntax for clarity here

module.exports = multipleNames;

// file2.js

const mystery = require("./file1.js");
console.log(mystery); // logs {name1: 'philippa', name2: 'izzi'}

console.log(mystery.name1); // philippa
console.log(mystery.name2); // izzi
```

### 4. Exporting functions

#### Guidance

1.  Clear the previous example and create and export a function (ideally containing a console.log for the example). In the receiving file, console.log the required-in value and ask what will be logged - some students may suggest 'hello' will be logged. Show how we actually get `[Function sayHello]` because we haven't _used_ the exported function - the uninvoked function is exported.

```js
// file1.js

function turnOffLight() {
    console.log("light is off");
}

module.exports = turnOffLight;

// file2.js

const lightSwitch = require("./file1.js");
console.log(lightSwitch); // logs [Function lightSwitch]

// To get the 'hello' console.log, we have to _use_ the required in function - show this too
```

2.  Make another function in `file1` and get them to navigate you exporting and requiring this in. Again, it is recommended that the lecturer does not use short-hand syntax when declaring the object, nor object destructuring when requiring in. Show that we need to then use dot notation to access the individual functions.

        Nav with student exporting multiple functions

```js
// file1.js

function turnOffLight() {
    console.log("light is off");
}

function turnOnLight() {
    console.log("light is now on");
}

module.exports = { turnOnLight: turnOnLight, turnOffLight: turnOffLight };

// file2.js

const mystery = require("./file1.js");
console.log(mystery); // logs {sayHello: [Function sayHello], sayGoodbye: [Function sayGoodbye] }
```

3.  Show can you can use short-hand when declaring objects if you want the new key to be the same as the variable name. Mention that this is not unique to exporting and can be used anywhere that an object is declared. (_Unless they are very strong, leave object destructuring for another day_)

        Shorthand for objects

```js
// file1.js

const sayHello = function () {
    console.log("hello");
};

sayGoodbye = function () {
    console.log("goodbye");
};

module.exports = { sayHello, sayGoodbye };
```

4. Use a basic example to demonstrate that the file being required in is always executed.

```js
// file-1.js

console.log("hello in file 1!");

// file-2.js

require("./file-2.js");
```
