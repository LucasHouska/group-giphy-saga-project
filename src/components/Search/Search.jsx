import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchList from '../SearchList/SearchList';


function Search() {

    const dispatch = useDispatch();

    const [searchWord, setSearchWord] = useState('')

    const handleSubmit = (event) => {
        console.log('handleSubmit func')
        event.preventDefault();
        
        dispatch({type: 'SEARCH_API', payload: searchWord})
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                required
                value={searchWord}
                onChange={(event) => setSearchWord(event.target.value)}
            />
            <button type="submit">SEARCH</button>
        </form>
        <SearchList />
        </>
        )
}

export default Search;