## Day 3 solutions

### lunchtime - problem solving

day 3 - problem solving - paired - advanced - 2.js

```
function encodeTimes(times) {
  const fullHourInMinutes = 60;
  times.push(fullHourInMinutes);

  let sleepCharacters = "";
  let isDots = true;

  for (let i = 0; i < times.length - 1; i++) {
    const interval = times[i + 1] - times[i];
    if (isDots) {
      const dots = ".".repeat(interval);
      sleepCharacters += dots;
      isDots = false;
    } else {
      const hashes = "#".repeat(interval);
      sleepCharacters += hashes;
      isDots = true;
    }
  }
```

OR

```
function encodeTimes(times) {
  const fullHourInMinutes = 60;
  times.push(fullHourInMinutes);



  const intervals = [];
  for (let i = 0; i < times.length - 1; i++) {
    const interval = times[i + 1] - times[i];
    intervals.push(interval);
  }
  let sleepCharacters = "";
  for (let i = 0; i < intervals.length; i++) {
    if (i % 2 === 0) {
      const dots = ".".repeat(intervals[i]);
      sleepCharacters += dots;
    } else {
      const hashes = "#".repeat(intervals[i]);
      sleepCharacters += hashes;
    }
  }
  return sleepCharacters;
}

```

OR

```
function encodeTimes(times) {
  let sleepChars = "";
  let index = 1;
  let isDots = true;
  for (let i = 0; i < 60; i++) {
    const eventTime = times[index];
    if (i === eventTime) {
      isDots = !isDots;
      index++;
    }
    if (isDots) {
      sleepChars += ".";
    } else {
      sleepChars += "#";
    }
  }
  return sleepChars;
}
```
