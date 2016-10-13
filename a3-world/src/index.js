import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, browserHistory} from 'react-router';
import routes from './routes';



ReactDOM.render(
    <Router history={browserHistory} routes={routes} />, document.getElementById('root')
)




// import 'babel-polyfill';
// import 'babel-core/register'

// const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

// store.dispatch(fetchRuns())
// store.dispatch(fetchRunners())
// store.dispatch(fetchTwitchStreams())

//  <Provider store={store} >


// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
// import rootReducer from './reducers';