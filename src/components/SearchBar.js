import React, {useState} from '../../node_modules/react';
import SearchResults from './SearchResults';
//form to type in search, passes to results to get them
//for onSubmit, may want this to be changing the form value to trigger a re render...
function SearchBar() {
    const [search,setSearch] = useState('');

    const changeHanlder = (e) => {
        setSearch(e.target.value);
    };

     return (
        <>
            <form>
                <label htmlFor ='search'>Search for a Song</label>
                <input name = 'search' type = 'text' value = {search} onChange = {changeHanlder} placeholder = 'Search for a song title'/>
                <input name = 'submit' type = 'submit' value = 'Submit' />
            </form>

            <SearchResults search = {search}/>
        </>
    );
}

export default SearchBar;