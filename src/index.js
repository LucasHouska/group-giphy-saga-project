import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {takeEvery, put, take} from 'redux-saga/effects';
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

function favoritesReducer(state = [], action) {
    switch(action.type) {
        case 'SET_FAVORITES':
            return action.payload;
            break;
        default:
            return state;
    }
}


const sagaMiddleware = createSagaMiddleware();

function* watcherSaga() {

    yield takeEvery('SEARCH_API', searchAPI);
    yield takeEvery('GET_FAVORITES', getFavorites);

    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery('REMOVE_FAVORITE', removeFavorite);

}



function* addFavorite(action) {
    console.log('in index add FAVORITE ', action.payload);
    
    let response = yield axios.post('/api/favorite', {url: action.payload})

}

function* getFavorites() {
    try {
        let response = yield axios.get('/api/favorite')
        console.log('getFavorites response:', response.data)
        yield put({type: 'SET_FAVORITES', payload: response.data})
    } catch (err) {
        console.log(err, 'unable to get favorites from server');
    }
}

function* removeFavorite(action){
    try {
        let response = yield axios.delete(`/api/favorite/${action.payload}`)
        console.log('in index removeFavorite', response);
        yield getFavorites();
    } catch (err){
        console.log('in index removeFavorite', err);       
    }
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
