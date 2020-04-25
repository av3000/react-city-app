import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
          <h1>City Guide App</h1>
      </div>
    );
  }
 
}

export default App;
