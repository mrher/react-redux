import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistartoinForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('form is submited. email value is', this.state.email);
    }
    handleEmailChange(event){
        console.log('email was changed', event.target.value);
        this.setState({
            email: event.target.value
        });
    }
    render(){
        //console.log('items', this.props.items)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="emailField"
                    />
                    <button 
                    type="submit"
                    className="submitButton"
                    >
                    save
                    </button>
                </form>
            </div>
        )
    }
}

export default RegistartoinForm;