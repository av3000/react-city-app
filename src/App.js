import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/pages/Home';
import News from './components/pages/News';
import Details from './components/pages/Details';
import Contacts from './components/pages/Contacts';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/details" component={Details} />
            <Route path="/contacts" component={Contacts} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
 
}

export default App;
