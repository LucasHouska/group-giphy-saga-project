import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function SearchListItem({image}) {
    console.log('image:', image);
    
    const handleFavorite = () => {
        console.log('clicked fav');
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