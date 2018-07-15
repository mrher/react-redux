import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTracks from './actions/tracks'

const App = ({ tracks, onAddTrack, onFindTrack, onGetTracks }) => {
    let trackInput = '';
    let searchInput = '';
    
    const addTrack = () => {
        console.log('addTrack', trackInput.value);
        onAddTrack(trackInput.value);
        trackInput.value = '';
    }
    const findTrack = () => {
        console.log('findTrack', searchInput.value);
        onFindTrack(searchInput.value);
    }
    return (
        <div>
            <div>
                <input type="text" ref={(input) => { trackInput = input }} />
                <button onClick={addTrack}>Add track</button>
            </div>
            <div>
                <input type="text" ref={(input) => { searchInput = input }} />
                <button onClick={findTrack}>Find track</button>
            </div>
            <div>
                <button onClick={onGetTracks}>Get tracks</button>
            </div>
            <ul>
                {tracks.map((track, index) => 
                    <li key={index}>{track.trackName}</li>
                )}
            </ul>
        </div>
    )
}

export default connect(
    (state, ownProps) => ({
        tracks: state.tracks.filter(
            track => track.trackName.includes(state.filterTracks)
            ,ownProps
        )
    }),
    dispatch => ({
        onAddTrack: (trackName)=>{
            const payload = {
                id: Date.now().toString(),
                trackName 
            }
            dispatch({
                type: 'ADD_TRACK', 
                payload
            })
        },
        onFindTrack: (trackName)=> {
            //console.log('trackName', trackName);
            dispatch({
                type: 'FIND_TRACK',
                payload: trackName
            })
        },
        onGetTracks: ()=> {
            dispatch(getTracks());
        }
    })
)(App);
