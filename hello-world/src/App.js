import React, { Component } from 'react';
import RegistartoinForm from './RegistartoinForm';
import Dropdown from './Dropdown';
import Header from './Header';
import Refs from './Refs';
import './App.css';

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
]

class App extends Component {
    render(){
        return (
            <div className="container">
                <RegistartoinForm />
                <Header items={menu} />
                <Dropdown />
                <Refs />
            </div>
        )
    }
}

export default App;
