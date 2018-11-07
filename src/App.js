import React, { Component } from 'react';
import './App.css';
import AppNameBar from './components/appbar'
import Container from './components/container'

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNameBar/>
                <Container/>
            </div>
        );
    }
}

export default App;
