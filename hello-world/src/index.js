import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    tracks: [
        'Smells like teen spirit',
        'Enter Sandman'
    ],
    playlists: [
        'my work playlis',
        'my honme playlist'
    ]
}

function playlist(state = initialState, action){
    if (action.type === 'ADD_TRACK'){
        return {
            ...state,
            tracks: [...state.tracks, action.payload]
        };
    }else if (action.type === 'DELETE_TRACK'){
        return state;
    }else if (action.type === 'ADD_PLAYLIST'){
        return state;
    }else if (action.type === 'DELETE_PLAYLIST'){
        return state;
    }
    return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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