# Advanced

### 1

```
function shoutNames(names) {
    const shoutedNames = names.map((name) => {
        return name + "!";
    });
    return shoutedNames;
}
```

### 2

```
function compoundInterest(value, interestRate, years) {
    let bankAccount = value;
    for (let i = 1; i <= years; i++) {
        bankAccount *= interestRate + 1;
    }
    return +bankAccount.toFixed(2);
}
```

### 3

```
function capitalArtists(arr) {
    const artists = arr.map((pair) => {
        const regex = /^\w+/;
        const artist = pair.match(regex);
        return artist[0].toUpperCase();
    });

    return artists;
}
```

### 4

```
function sumSentence(arr) {
    const costs = arr.map((fruitObj) => fruitObj.cost);
    const total = sumArray(costs);

    return `The total cost of the fruits is £${total}`;
}
```

### 5

```
function returnHighest(array, num) {
    if (num === 0 || array.length < num) {
        return [];
    }

    array.sort((a, b) => {
        return b.score - a.score;
    });

    const multipleOfNum = Math.floor(array.length / num);
    // for (let i = 1; i <= array.length; i++) {
    //     if (i % num === 0) {

    //         multipleOfNum++;
    //     }
    // }
    const topScorers = array.filter((teams, index) => {
        return index < multipleOfNum;
    });
    return topScorers;
}
```
