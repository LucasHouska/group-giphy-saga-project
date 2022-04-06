import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesList from '../FavoritesList/FavoritesList';

function Favorites() {
    
    return(
        <>
            <FavoritesList />
        </>
    )
}

export default Favorites;