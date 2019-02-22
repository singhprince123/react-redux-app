import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import  { reducer as formReducer} from 'redux-form';
import listReducer from '../src/store/reducers/listReducers'

const reducers  = combineReducers({
    list: listReducer,
    form: formReducer
})

const store = createStore(reducers)
console.log("store = ", store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
