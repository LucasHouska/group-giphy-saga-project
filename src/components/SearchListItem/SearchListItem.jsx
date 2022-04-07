import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function SearchListItem({image}) {

    const dispatch = useDispatch();

    console.log('image:', image);

    const handleFavorite = () => {
        console.log('clicked fav in client', console.log(image.images.original.url));
        dispatch({type: 'ADD_FAVORITE', payload: image.images.original.url})
    }

    return(
        <>
            <div>
                <img src={image.images.original.url}/>
                <button onClick={handleFavorite}>💖</button>
            </div>
        </>
        )
}

export default SearchListItem;