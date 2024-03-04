import React, {useState} from 'react';
import Track from './Track';

//is going to call Track. props will contain an array of track objects to display

function TrackList(props) {

    return (
        <>
            {
                props.tracks.map(track => {
                   return <Track track = {track} key = {track.id} />;
                })
            }
        </>
    );
}

export default TrackList;