import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function SearchListItem() {
    return(
        <>
            <div>
                <img src={image.data?.images.original.url}/>
            </div>
        </>
        )
}

export default SearchListItem;