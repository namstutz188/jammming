import React, {useState} from 'react';
import TrackList from './Tracklist';
function SearchResults(props) {
    //Here is where do the API call
    const temp = [{artist: 'Ed Sheeran', name: 'Shape of You', album: '/', id: 1 }, {artist: 'Alex C', name: 'Woofy Song', album: 'Woofy Album', 
    id: 2},  {artist: 'Nick A', name: 'Woofy is awesome', album: 'Woofy part 2', id: 3}];

    return (
        <div className = 'searchresults'>
            <TrackList tracks = {temp} addPlay = {props.addPlay}/>
        </div>
    );
}

export default SearchResults;