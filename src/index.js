import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';



function apiReducer(state=[], action) {
    switch(action.type) {
        case 'SET_RESULTS':
            return action.payload
        default:
            return state
    }
    return state;
}

function favoritesReducer(state=[], action) {
    switch (action.type) {
        // case 'ADD_FAVORITE':
        //     return [...state, action.payload]
        default:
            return state
    }
}


const sagaMiddleware = createSagaMiddleware();

function* watcherSaga() {

    yield takeEvery('SEARCH_API', searchAPI)

    yield takeEvery('ADD_FAVORITE', addFavorite)

}



function* addFavorite(action) {
    console.log('in index add FAVORITE ', action.payload);
    
    let response = yield axios.post('/api/favorite', {url: action.payload})

    console.log(response.config.data.url)
}



function* searchAPI(action) {
    try {
        console.log('Made it to saga!')

        let response = yield axios.get(`/api/search/${action.payload}`)

        yield put({type: 'SET_RESULTS', payload: response.data.data})
    } catch (err) {
        console.log(err)
    }
}


const storeInstance = createStore (
    combineReducers({
        apiReducer,
        favoritesReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
