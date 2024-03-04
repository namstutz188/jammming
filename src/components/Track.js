import React, {useState} from 'react';
//recieve a singular track object and needs to render the values
function Track(props) {
    return (
        <div className = 'track'>
            <div className = 'details'>
                <h1>{props.track.name}</h1>
                <p>{props.track.artist + ' | ' + props.track.album}</p>
            </div>
            <div className = 'add'>
                <p>+</p>
            </div>
        </div>
    );
}

export default Track;