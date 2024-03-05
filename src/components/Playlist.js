import React, {useState} from 'react';
import Track from './Track';

function PlayList(props) {

    const [title, setTitle] = useState('')

    const uris = [];
    props.playlist.forEach(track => uris.push(track.uri)); //spotify uses to referemce tracks in the spotify libray

    const removeFromPlaylist = (e) => {
        const index = Number(e.target.getAttribute('valueindex'));
        props.setPlaylist(list =>  list.filter((_,j) => j !== index));
    };

    const handleSubmit = (e) => {
        //eventually do something else in here to save to spotify!
        e.preventDefault();
        props.setPlaylist([]);
    }
    

    return (
        <>
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
                                    <p onClick = {removeFromPlaylist} valueindex = {i}>-</p>
                                </div>
                            </div>
                    </>
                    )
                })
            }
            </div>
            <div className ='savetospotify'>
                <form onSubmit = {handleSubmit}>
                    <input type ='submit' value = 'Save To Spotify'></input>
                </form>
            </div>
        </>

    );
}

export default PlayList;