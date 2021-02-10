import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
    return (
        <ProSidebar>
            <SidebarHeader>
              <h1>B A S E B A L L</h1>
              <h4>s c o r e  k e e p e r</h4>
            </SidebarHeader>
            <Menu iconShape="square">
              <MenuItem class="menu-item">
                Home
                <Link to="/"/>
              </MenuItem>
              <MenuItem class="menu-item"> 
                About
                <Link to="/About"/>
              </MenuItem>
              <MenuItem class="menu-item">How It Works</MenuItem>
              <MenuItem class="menu-item">Demo</MenuItem>
            </Menu>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem class="menu-item">Team</MenuItem>
                <MenuItem class="menu-item">Contact</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
    )
}

export default Sidebar