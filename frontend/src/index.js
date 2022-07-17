import React from "react"
import { createRoot } from 'react-dom/client'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

//import Routes from "./main/routes";

import reducers from './main/reducers'
import AuthOrApp from "./main/authOrApp";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
);

reportWebVitals();
