import React, {useState} from 'react';
import Track from './Track';

function PlayList(props) {

    const [title, setTitle] = useState('')

    return (
        <div className = 'playlist'>
            <div className = 'playlistname'>
                <h1>Playlist</h1>
                <form>
                    <input name = 'title' type = 'text' value = {title} onChange = {(e) => setTitle(e.target.value)} placeholder = 'Enter a playlist title'></input>
                </form>
            </div>
        {
            props.playlist.map((track,i) => {
                return (
                    <>
                        <div className = 'trackP' key = {String(i) + 'p'}>
                            <Track track = {track}/>
                            <div className = 'delete'>
                                <p onClick = {props.removePlay} valueindex = {i}>-</p>
                            </div>
                        </div>
                </>
                )
            })
        }
        </div>
    );
}

export default PlayList;