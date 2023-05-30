# Seminar Overview

The lecture will introduce the OOP paradigm, factory function pattern and the `this` keyword. This goal of this seminar is to apply these principles to create a factory function with TDD whilst re-enforcing the `arrange`, `act`, `assert` testing pattern.

# Seminar Outline

Start with an outline of the object you're going to create and the behaviours it will have. Any object that contains a list you can push to will do as an example. Don't spend too long implementing functionality as they will need an explanation of the behaviour of stacks and queues.

## Introduce the task

```js
/* 
You are starting up your own music streaming service to rival Spotify. 
Your task is to write a createPlaylist factory function that produces playlist objects for your users to listen to.
Your users should be able to name their playlists, add tracks to it by name, get the name of the current track and move on to the next track in the list.
const partyAnthems = createPlayList('absolute bangers');
partyAnthems.name // 'absolute bangers'
partyAnthems.addTrack('superstition');
partyAnthems.addTrack('uptown girl');
partyAnthems.tracks // ['superstition', 'uptown girl']
partyAnthems.getCurrentTrack() // `Now playing: superstition`
partyAnthems.nextTrack()
partyAnthems.getCurrentTrack() // 'uptown girl'
*/
function createPlayList() {
    //
}
```

## Testing strategy

Discuss where to start with the testing coming to the conclusion that testing the simple properties first and then the more complex methods fits our TDD process.

```js
test("playlists have a passed name property", () => {
    const testList = createPlayList("absolute bangers");
    expect(testList.name).toBe("absolute bangers");
});
test("playlists start with an empty tracks array", () => {
    const testList = createPlayList("absolute bangers");
    expect(testList.tracks).toEqual([]);
});
function createPlayList(name) {
    const newList = {};
    newList.name = name;
    newList.tracks = [];
    return newList;
}
```

## Test a method

Once the properties are tested move on to testing a method. Discuss how we can check the method works as intended. If needed remind the students that the method is a function and we should test it following our TDD principles just as we would with any other function. `Arrange`, `Act`, `Assert` may prove helpful here in setting up a test case.
When implementing the function draw attention to the fact that we are declaring the method outside of the factory function so we don't create new ones each time we make a playList.

```js
test(".addTrack() - adds a passed track to the list", () => {
    // arrange
    const testList = createPlayList("absolute bangers");
    // act
    testList.addTrack("superstition");
    // assert
    expect(testList.tracks).toEqual(["superstition"]);
});
test(".addTrack() - adds multiple tracks to the list", () => {
    const testList = createPlayList("absolute bangers");
    testList.addTrack("superstition");
    testList.addTrack("uptown girl");
    expect(testList.tracks).toEqual(["superstition", "uptown girl"]);
});
function createPlayList(name) {
    const newList = {};
    newList.name = name;
    newList.tracks = [];
    newList.currTrackIndex = 0;
    newList.addTrack = addTrack;
    return newList;
}
function addTrack(trackName) {
    this.tracks.push(trackName);
}
```

## Test a more complex method (optional)

The above examples give them everything they need to go off but if you have enough time an example of some more complex functionality. `getCurrentTrack` will require them to think of a way of keeping track of which track is currently being played. Take suggestions for this, a good implementation would be to keep track of the index.

```js
test(".getCurrentTrack() - returns the currently playing track", () => {
    const testList = createPlayList("absolute bangers");
    testList.addTrack("superstition");
    testList.addTrack("uptown girl");
    expect(testList.getCurrentTrack()).toEqual(`Now playing: superstition`);
});
test(".nextTrack() - changes the currentTrack to the next one in the list", () => {
    const testList = createPlayList("absolute bangers");
    testList.addTrack("superstition");
    testList.addTrack("uptown girl");
    testList.nextTrack();
    expect(testList.getCurrentTrack()).toEqual(`Now playing: uptown girl`);
});
function createPlayList(name) {
    const newList = {};
    newList.name = name;
    newList.tracks = [];
    newList.currentTrackIndex = 0;
    newList.addTrack = addTrack;
    newList.getCurrentTrack = getCurrentTrack;
    newList.nextTrack = nextTrack;
    return newList;
}
function addTrack(trackName) {
    this.tracks.push(trackName);
}
function getCurrentTrack() {
    return `Now playing: ${this.tracks[this.currentTrackIndex]}`;
}
function nextTrack() {
    this.currentTrackIndex++;
}
```

A good discussion point here is that we are testing the methods behaviours, not their implementations and if we wanted to refactor our object to track it in a different way (by name for example) then we could still use the same test suite.
There are more behaviours that could be added here such as making the playlist loop back to the start, back or repeat functionality and we would test and implement those features one by one.

## Notes / common pitfalls

**nb** One of the problems the students will have to overcome in the sprint is how to return a deleted element when using pop. This example deliberately splits up the `getCurrentTrack` and `nextTrack` methods to avoid showing how to solve this problem.

### Not using toEqual on the whole instance

A common approach for students is to check for returns an object as the first test. This is not a bad idea but they will often be tempted to use `.toEqual({})`. Note how this test is not correct as `.toEqual` will test the whole object which will not always be empty.
Testing the individual properties makes the tests more specific and open to extension.

### Private variable naming convention

If some students have prior knowledge of OOP languages then they might ask about keeping `currentTrackIndex` private. If this comes up you can show them the `_currentTrackIndex` naming convention to indicate private variables that they might come across from older JS.

### Logging in the test

Students often don't realise that they can `console.log` in the tests to debug their methods. Demonstrating this can often help them out and make it easier for them to visualize the objects.
