import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import FormIndex from './components/formIndex';
import mainReducer from './reducers/reducerIndex';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(mainReducer)}>
            <FormIndex />
        </Provider>,
        document.getElementById('app')
    );
});