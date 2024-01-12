# Complex Data Manipulation

https://www.figma.com/file/gU0UCVfE079x8f6w0qxWdv/pure-functions?type=whiteboard&node-id=0-1&t=XRIAogEFucVusfgC-0

## Test 1

New array

## Test 2

single wizard for multiple katas

```js
function updateScores(people, kataScores) {
    let totalPoints = 0;

    const katasCompleted = people[0].katasCompleted;

    katasCompleted.forEach((kata) => {
        const foundKata = kataScores.find(
            (kataWithScore) => kataWithScore.name === kata
        );
        totalPoints += foundKata.points;
    });

    people[0].points = totalPoints;

    return [...people];
}
```

## Test 3

New wizard object within array

```js
function updateScores(people, kataScores) {
    let totalPoints = 0;

    const personCopy = { ...people[0] };

    const katasCompleted = personCopy.katasCompleted;

    katasCompleted.forEach((kata) => {
        const foundKata = kataScores.find(
            (kataWithScore) => kataWithScore.name === kata
        );
        totalPoints += foundKata.points;
    });

    personCopy.points = totalPoints;

    return [personCopy];
}
```

## Test 4 - Multiple wizards

```js
function updateScores(people, kataScores) {
    const updatedScores = [];

    for (const person of people) {
        let totalPoints = 0;
        const personCopy = { ...person };

        const katasCompleted = personCopy.katasCompleted;

        katasCompleted.forEach((kata) => {
            const foundKata = kataScores.find(
                (kataWithScore) => kataWithScore.name === kata
            );
            totalPoints += foundKata.points;
        });

        personCopy.points = totalPoints;
        updatedScores.push(personCopy);
    }

    return updatedScores;
}
```

### Map refactor

```js
function updateScores(people, kataScores) {
    const updatedScores = people.map((person) => {
        let totalPoints = 0;
        const personCopy = { ...person };

        const katasCompleted = personCopy.katasCompleted;

        katasCompleted.forEach((kata) => {
            const foundKata = kataScores.find(
                (kataWithScore) => kataWithScore.name === kata
            );
            totalPoints += foundKata.points;
        });

        personCopy.points = totalPoints;
        return personCopy;
    });

    return updatedScores;
}
```

## Test 5 - does not mutate
