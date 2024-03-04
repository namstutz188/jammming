import React, {useState} from 'react';
import Track from './Track';

function PlayList(props) {
    return (
        <div className = 'playlist'>
        {
            props.playlist.map(track => {
                return (
                <div className = 'trackP' key = {track.id + 'p'}>
                    <Track track = {track}/>
                    <div className = 'delete'>
                        <p onClick = {props.removePlay} value = {track.id}>-</p>
                    </div>
                </div>
                )
            })
        }
        </div>
    );
}

export default PlayList;