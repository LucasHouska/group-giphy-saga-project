import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesListItem from '../FavoritesListItem/FavoritesListItem';

function FavoritesList() {

    const dispatch = useDispatch();

    const favoritesReducer = useSelector(store => store.favoritesReducer);
    console.log('what is this one!', favoritesReducer);

    useEffect(() => {
        getFavorites();
    }, []);

    const getFavorites = () => {
        dispatch({type:'GET_FAVORITES'});
    }

    return(
        <>
        {favoritesReducer.map((favoriteImage) => {
            return (
                < FavoritesListItem favoriteImage={favoriteImage} />          
            )
        })}
        </>
    )
}

export default FavoritesList;