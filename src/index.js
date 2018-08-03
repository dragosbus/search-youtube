import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import {fetchDataAsync} from './App';

const store = createStore(rootReducer, applyMiddleware(fetchDataAsync));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);