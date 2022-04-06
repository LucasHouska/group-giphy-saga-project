import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchListItem from '../SearchListItem/SearchListItem';

function SearchList() {

    const apiReducer = useSelector(store => store.apiReducer);
    console.log('what is it?', apiReducer);

    // useEffect(() => {

    // }, []);

    return (
        <>
            {apiReducer.map((image) => {
                return (
                    < SearchListItem image={image} /> 
            )
            })}
        </>
    )
}

export default SearchList;