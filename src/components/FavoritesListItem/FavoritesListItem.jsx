import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


function FavoritesListItem({favoriteImage}) {
    console.log('favorite image:', favoriteImage);
    console.log('favorite url:', favoriteImage.url);

    return(
        <>
        <div>
            <img src={favoriteImage.url}/>    
        </div>
        </>
        )
}

export default FavoritesListItem;