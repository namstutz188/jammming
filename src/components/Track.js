import React, {useState} from 'react';
//recieve a singular track object and needs to render the values
function Track(props) {
    return (
        <div className = 'details'>
            <h1>{props.track.name}</h1>
            <p>{props.track.artist + ' | ' + props.track.album}</p>
        </div>

    );
}

export default Track;