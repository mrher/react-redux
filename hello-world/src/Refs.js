import React, { Component } from 'react';

export default class Refs extends Component {
    submit(){
        console.log('submit', this.refs.title.value);
    }
    render(){
        //console.log('items', this.props.items)
        return (
            <div>
                <br/>
                <br/>
                <input 
                type="text" 
                placeholder="test"
                ref="title"
                />
                <button 
                type="submit"
                onClick={this.submit.bind(this)}
                >
                Submit
                </button>
            </div>
        )
    }
}