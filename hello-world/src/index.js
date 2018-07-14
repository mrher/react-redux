import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';

const store = createStore(
        reducer, 
        composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

//import {createStore} from 'redux';
//
//function playlist(state = [], action){
//    if (action.type == 'ADD_TRACK'){
//        return [
//            ...state,
//            action.payload
//        ];
//    }
//    return state;
//}
//
//const store = createStore(playlist);
//
//const addTrackButton = document.querySelectorAll('.addTrack')[0];
//const trackInput = document.querySelector('.trackInput');
//const list = document.querySelectorAll('.list')[0];
//
//store.subscribe(() => {
//    console.log('subscribe', store.getState());
//    list.innerHTML = "";;
//    trackInput.value = '';
//    store.getState().forEach(track => {
//        const li = document.createElement('li');
//        li.textContent = track;
//        list.appendChild(li);
//    })
//})
//
//addTrackButton.addEventListener('click', () => {
//    const trackName = trackInput.value;
//    store.dispatch({type: 'ADD_TRACK', payload: trackName});
//})