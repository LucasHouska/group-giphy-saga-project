import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function SearchListItem({image}) {
    console.log('image:', image);
    
    console.log('url:', image.images.original.url);

    return(
        <>
            <div>
                <img src={image.images.original.url}/>
            </div>
        </>
        )
}

export default SearchListItem;