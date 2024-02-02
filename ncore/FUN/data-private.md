# Private

```js
function createPlayList(playlistName) {
const newPlayList = {
name: playlistName,
tracks: [],
_CURRTRACKINDEX: 0,
addTrack,
getCurrentTrack,
nextTrack,
 };
return newPlayList;
}

function addTrack(trackName) {
this.tracks.push(trackName);
}

function getCurrentTrack() {
return `Now playing: ${this.tracks[this._CURRTRACKINDEX]} ;
}

function nextTrack() {
this._CURRTRACKINDEX++;
}
```
