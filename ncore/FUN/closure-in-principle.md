# Closure in Principle

The goal for this session is to provide a forum for students to confirm their understanding of closures in Javascript and reiterate the technical terminology and principles set out in the lecture.

https://pythontutor.com/render.html#mode=display

Session plan: https://docs.google.com/document/d/1pLubI1JmUb6LJ86Jxsu8Y9aI4RxKO6NibWrLYuu9bD4/edit

```js
function createTaskManager(taskLimit = 2) {
    const tasks = [];

    function addTask(task) {
        if (tasks.length < taskLimit) {
            tasks.push(task);
        }
        return tasks;
    }
    return addTask;
}
```
