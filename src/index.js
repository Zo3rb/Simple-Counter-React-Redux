import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Internal Imports
import './index.css';
import App from './components/App';
import reducer from './reducers';

ReactDom.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>
    , document.querySelector('#root')
);