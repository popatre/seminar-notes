# Seminar Overview

The lecture covers how to make new Promises and chain them together using the `.then` and `.catch` methods. Running multiple promises at the same time is covered in the afternoon lecture.

# Seminar Outline

The aim of this seminar is to show them how to use a promise based library.

This guidance uses the example of using `fs/promises` to read a directory and log a list of JS files in that dir.

```js
const fs = require("fs/promises");

fs.readdir(`${__dirname}/data`)
    .then((fileNames) => {
        const jsonFiles = fileNames.filter((file) => file.endsWith(".json"));
        const firstFileName = jsonFiles[0];

        return fs.readFile(`${__dirname}/data/${firstFileName}`, "utf8");
    })
    .then((fileData) => {
        return fileData;
    });
```

## Introduce the promise library

Note that node has an promise based version of the `fs` library, `fs/promises`.
Explain that the methods have similar functionality but return promises instead of taking callbacks.

Show the docs for [readdir](https://nodejs.org/api/fs.html#fspromisesreaddirpath-options) and note the arguments and that the return value is a Promise.

Require in the method and invoke it with the path to an example directory

```js
const fs = require("fs/promises");

fs.readdir(`${__dirname}/data`);
```

**nb** If the students are on an old version of node (<= 12) they might have to require it using the following path.

```js
const fs = require("fs").promises;
```

Ask the students how to get the resolution of a promise: `.then`

```js
const fs = require("fs/promises");

fs.readdir(`${__dirname}/data`).then((fileNames) => {
    console.log(fileNames);
});
```

## fs file paths

File paths are used by many of the fs methods but the way relative paths are worked out is different to how they will be used to with `require`.

[docs](https://nodejs.org/api/fs.html#file-paths)

Using a relative path (e.g. `./data`) will use the working directory of the terminal. To avoid bugs with our code node provides a global variable `__dirname` (there's a `__filename` as well) that we can use to construct an absolute path that will always work regardless of the terminal's location.

## Using the resolution of a promise

Once we are in the callback of a `.then` block we can use the resolution value as normal and perform any synchronous operations we like. If we want to do another async operation then we should `return` a promise from the `.then` block and chain on another. It is worth noting that nesting `.then` blocks within each other will work, however it prevents us form creating a promise chain, defeating the point of using promises in the first place.

```js
const fs = require("fs/promises");

fs.readdir(`${__dirname}/data`).then((fileNames) => {
    const jsFiles = fileNames.filter((fileName) => fileName.endsWith(".js"));
    console.log(jsFiles);
});
```

## Performing another async function

How to read the first file

-   point out nesting working - but issue with catch

```js
fs.readdir(`${__dirname}/data`)
    .then((fileNames) => {
        const jsonFiles = fileNames.filter((file) => file.endsWith(".json"));
        const firstFileName = jsonFiles[0];

        return fs.readFile(`${__dirname}/data/${firstFileName}`, "utf8");
    })
    .then((fileData) => {
        return fileData;
    });
```

## functions that return promises

The logic of reading the directory works perfectly well however we will frequently want to write functions to perform these operations.

Refactor the example into a function that will do the same logic as above. Note that this function will need to give back the data. We have 2 async patterns available to us, invoke a callback or return a promise.

```js
function listJsonFiles() {
    fs.readdir(`${__dirname}/data`)
        .then((fileNames) => {
            const jsonFiles = fileNames.filter((file) =>
                file.endsWith(".json")
            );
            const firstFileName = jsonFiles[0];

            return fs.readFile(`${__dirname}/data/${firstFileName}`, "utf8");
        })
        .then((fileData) => {
            return fileData;
        });
}

console.log(listJsonFiles()); // Promise { pending }
```

Note that here we are returning the whole promise chain. `fs.readdir` + `.then`. We must return this promise so that we can access the resolution value.

Access this resolution value in the usual way, with a `.then`

```js
function listJSFiles() {
    return fs.readdir(`${__dirname}/data`).then((fileNames) => {
        const jsFiles = fileNames.filter((fileName) =>
            fileName.endsWith(".js")
        );
        console.log(jsFiles);
    });
}

listJsonFiles().then((result) => {
    console.log(result); // undefined
});
```

Note that the final resolution value will be whatever the final `.then` returns. At the moment that is nothing but we can return the `jsFiles` to access them. This way we have created a re-useable async function that returns a promise.

```js
function listJSFiles() {
    return fs.readdir(`${__dirname}/data`).then((fileNames) => {
        const jsFiles = fileNames.filter((fileName) =>
            fileName.endsWith(".js")
        );
        console.log(jsFiles);
    });
}

listJSFiles().then((result) => {
    console.log(result); // [one.js, two.js, three.js]
});
```

We could customise this further using parameters for the dirPath to make it more flexible, feel free to demo this if the group would benefit from it.
