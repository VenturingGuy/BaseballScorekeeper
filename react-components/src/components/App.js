import Header from './Header';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div>
      <Header>
        <Route exact path="/" component={Home}/>
      </Header>
    </div>
  );
    }
}

export default App;
