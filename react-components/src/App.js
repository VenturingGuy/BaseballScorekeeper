import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <Router //basename={ProcessingInstruction.env.PUBLIC_URL}*/
      >
        <div className="App">
          <ProSidebar>
            <SidebarHeader>
              <h1>BASEBALL</h1>
              <h4>score keeper</h4>
            </SidebarHeader>
            <Menu iconShape="square">
              <MenuItem>about</MenuItem>
              <MenuItem>how it works</MenuItem>
              <MenuItem>demo</MenuItem>
            </Menu>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem>team</MenuItem>
                <MenuItem>contact</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
