import React, { Component } from 'react';

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpened: false
        };
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState(){
        this.setState({
            isOpened: !this.state.isOpened
        });
    }
    render(){
        console.log('isOpened', this.state.isOpened);
        let dropDownText;
        if (this.state.isOpened){
            dropDownText = <div>here is dropdown text inside</div>
        }
        return (
            <div onClick={this.toggleState}>
                it's Dropdown, baby!
                {dropDownText}
            </div>
        )
    }
}

//export default Dropdown;
