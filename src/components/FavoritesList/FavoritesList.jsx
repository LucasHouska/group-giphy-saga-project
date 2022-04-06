import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesListItem from '../FavoritesListItem/FavoritesListItem';

function FavoritesList() {
    return(
        <>
        <FavoritesListItem />
        </>
    )
}

export default FavoritesList;