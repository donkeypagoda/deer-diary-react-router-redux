import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from "./reducers"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store =

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
