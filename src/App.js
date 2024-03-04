import SearchBar from "./components/SearchBar.js";
import PlayList from "./components/Playlist.js";
import React, {useState} from 'react';
function App() {

  const [playlist,setPlaylist] = useState([]);

  const addToPlaylist = (e) => {
    const newTrack = {
      name: e.target.valueName,
      album: e.target.valueAlbum,
      id: e.target.valueID,
      artist: e.target.valueArtist
    }
    console.log(e.target.valueName);
    return setPlaylist([...playlist, newTrack]);
  };

  const removeFromPlaylist = (e) => {
    return setPlaylist(list => list.filter(track => track.id !== e.target.value));
  };

  return (
    <div className="App">
      <SearchBar addPlay = {addToPlaylist}/>
      <PlayList playlist = {playlist} removePlay = {removeFromPlaylist}/>
      <p>{'[' + playlist + ']'}</p>
    </div>
  );
}

export default App;
