import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTracks from './actions/tracks'

class App extends Component {
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.findTrack = this.findTrack.bind(this);
    }
    addTrack(){
        console.log('addTrack', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }
    findTrack(){
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }
    render(){
        console.log(this.props.tracks);
        return (
            <div>
                <div>
                    <input type="text" ref={(input) => { this.trackInput = input }} />
                    <button onClick={this.addTrack}>Add track</button>
                </div>
                <div>
                    <input type="text" ref={(input) => { this.searchInput = input }} />
                    <button onClick={this.findTrack}>Find track</button>
                </div>
                <div>
                    <button onClick={this.props.onGetTracks}>Get tracks</button>
                </div>
                <ul>
                    {this.props.tracks.map((track, index) => 
                        <li key={index}>{track.trackName}</li>
                    )}
                </ul>
            </div>
        )
    }
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
