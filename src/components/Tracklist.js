import React, {useState} from 'react';
import Track from './Track';

//is going to call Track. props will contain an array of track objects to display

function TrackList(props) {
    
    return (
        <div className = 'trackList'>
        {
            props.tracks.map((track,i) => {
                let trackMod = {
                    name: track.name,
                    album: track.album.name,
                    id: track.id,
                    artist: track.artists[0].name,
                    uri: track.uri
                };
                return (
                <div className = 'trackL' key = {String(i) + 'l'}>
                    <Track track = {trackMod}/>
                    <div className = 'add'>
                        <p onClick = {props.addPlay} valuename = {track.name} valueartist = {track.artists[0].name} valuealbum = {track.album.name} valueid = {track.id} valueuri = {track.uri}>+</p>
                    </div>
                </div>
                )
            })
        }
        </div>
    );
}

export default TrackList;