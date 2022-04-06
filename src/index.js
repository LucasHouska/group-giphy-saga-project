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
}


const sagaMiddleware = createSagaMiddleware();

function* watcherSaga() {

    yield takeEvery('SEARCH_API', searchAPI)

}



function* searchAPI(action) {
    try {
        console.log('Made it to saga!')

        let response = yield axios.get(`/api/search/${action.payload}`)

        yield put({type: 'SET_RESULTS', payload: response.data})
    } catch (err) {
        console.log(err)
    }
}


const storeInstance = createStore (
    combineReducers({
        apiReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
