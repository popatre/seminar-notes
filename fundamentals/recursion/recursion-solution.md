# Recursion Solution

### 0. Recap: 3 requirements for a recursive solution

#### Learning Objectives

-   Ensure students are comfortable with 3 requirements of a recursive solution
    -   It _calls itself_
    -   It has a _base case_
    -   It tends towards the base case with a _recursive step_

#### Guidance

-   Ask students to provide you with the 3 requirements of a recursive solution

### 1. Solving a problem with TDD where recursion is required

#### Learning Objectives

-   Recursion is a necessity when we are solving problems where an unknown level of traversal is required (e.g. nested objects and arrays)
-   How to solve a problem that involves object traversal with TDD.
-   Recursion becomes a natural next step if we find ourselves repeating a set of instructions.

#### Guidance

-   Solve a problem with help from students which focusses on traversing through an object. Some examples could be:
    -   `containsKey()` - which searches through a nested object and returns true if found, false if not (see resources folder)
    -   `countNestedItems()` - which counts the number of items nested in an array (see resources folder)
-   [OPTIONAL] - If you find a good moment to demo the debugger during this solution move on to step 2 early, otherwise look at it in isolation afterwards.
-   [OPTIONAL] - If time permits, work through another solution. Ensure you have solved one problem that handles traversal array, and one problem that handles traversal of an object for variety.

### 2. The Debugger

#### Learning Objectives

-   How to use the debugger.
-   How might the debugger come in handy?

#### Guidance

-   Set up the `launch.json` in VS code based on the environment we are working in (see resources)
-   Show students how you can pause execution with breakpoints
-   Show how you would step over (when you don't wish to inspect an execution context), step into (if you do wish to inspect an execution context) and.
-   Demonstrate how we can keep track of a recursive solution
-   Demonstrate how you can use the _watch_ functionality to keep track of variables.

-   Feel free to setup the debugger to work directly with a JS file rather than via the tests. Set up a new file called debugger.js to copy and paste your code into. This can avoid you getting lost by "stepping into" `it` or `expect` for example and will give you a code playgroud away from the regular files to aleviate student confusion between running the tests and running the debugger
    -   Head to debugger tab in VS Code
    -   "To customize Run and Debug create a launch.json file" - select this
    -   Select `Node.js`
    -   Done!

## Sprint and Morning Task

-   [Morning Task](https://github.com/northcoders/fun-morning-tasks-week-2-day-2)
-   [Sprint](https://github.com/northcoders/fun-recursion) - Same as yesterday
