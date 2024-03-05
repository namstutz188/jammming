import React, {useState} from 'react';
import Track from './Track';

//is going to call Track. props will contain an array of track objects to display

function TrackList(props) {
    
    return (
        <div className = 'trackList'>
        {
            props.tracks.map((track,i) => {
                return (
                <div className = 'trackL' key = {String(i) + 'l'}>
                    <Track track = {track}/>
                    <div className = 'add'>
                        <p onClick = {props.addPlay} valuename = {track.name} valueartist = {track.artist} valuealbum = {track.album} valueid = {track.id}>+</p>
                    </div>
                </div>
                )
            })
        }
        </div>
    );
}

export default TrackList;