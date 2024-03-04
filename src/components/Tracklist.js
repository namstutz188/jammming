import React, {useState} from 'react';
import Track from './Track';

//is going to call Track. props will contain an array of track objects to display

function TrackList(props) {

    return (
        <div className = 'trackList'>
        {
            props.tracks.map(track => {
                return (
                <div className = 'trackL' key = {track.id + 'l'}>
                    <Track track = {track}/>
                    <div className = 'add'>
                        <p onClick = {props.addPlay} valueName = {track.name} valueArtist = {track.artist} valueAlbum = {track.album} valueID = {track.id}>+</p>
                    </div>
                </div>
                )
            })
        }
        </div>
    );
}

export default TrackList;