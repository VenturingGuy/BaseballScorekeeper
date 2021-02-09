import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <Router //basename={ProcessingInstruction.env.PUBLIC_URL}*/
      >
        <div className="App">
          <Sidebar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
