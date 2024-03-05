import SearchBar from "./components/SearchBar.js";
import PlayList from "./components/Playlist.js";
import React, {useState} from 'react';
function App() {

  const [playlist,setPlaylist] = useState([]);

  const addToPlaylist = (e) => {
    const newTrack = {
      name: e.target.getAttribute('valuename'),
      album: e.target.getAttribute('valuealbum'),
      id: e.target.getAttribute('valueid'),
      artist: e.target.getAttribute('valueartist'),
      uri: e.target.getAttribute('valueuri')
    }
    console.log(e.target.valueName);
    setPlaylist([...playlist, newTrack]);
  };

  const removeFromPlaylist = (e) => {
    const index = Number(e.target.getAttribute('valueindex'));
    setPlaylist(list =>  list.filter((_,j) => j !== index));
  };

  return (
    <div className="App">
      <SearchBar addPlay = {addToPlaylist}/>
      <PlayList playlist = {playlist} setPlaylist = {setPlaylist}/>
    </div>
  );
}

export default App;
