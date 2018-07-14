import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    state => ({
        tracks: state.tracks.filter(track => track.trackName.includes(state.filterTracks))
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
        }
    })
)(App);
