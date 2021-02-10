import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import About from './About';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
