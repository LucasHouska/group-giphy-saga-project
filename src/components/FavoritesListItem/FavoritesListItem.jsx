import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


function FavoritesListItem({favoriteImage}) {
    console.log('favorite image:', favoriteImage);
    console.log('favorite url:', favoriteImage.url);

    const dispatch = useDispatch();

    const removeFavorite = () => {
        dispatch({type: 'REMOVE_FAVORITE', payload: favoriteImage.id});
    }

    return(
        <>
        <div>
            <img src={favoriteImage.url}/>    
            <button onClick={removeFavorite}>💔</button>
        </div>
        </>
        )
}

export default FavoritesListItem;