import React, {useState} from 'react';
import SearchResults from './SearchResults';
//form to type in search, passes to results to get them
//for onSubmit, may want this to be changing the form value to trigger a re render...
function SearchBar(props) {
    const [search,setSearch] = useState('');

    const changeHanlder = (e) => {
        setSearch(e.target.value);
    };

     return (
        <>
            <div className = 'searchbar'>
                <form>
                    <label htmlFor ='search'>Search for a Song</label>
                    <input name = 'search' type = 'text' value = {search} onChange = {changeHanlder} placeholder = 'Search for a song title'/>
                    <input name = 'submit' type = 'submit' value = 'Submit' />
                </form>
            </div>

            <SearchResults search = {search} addPlay = {props.addPlay}/>
        </>
    );
}

export default SearchBar;