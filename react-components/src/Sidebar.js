import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
    return (
        <ProSidebar>
            <SidebarHeader>
              <h1>B A S E B A L L</h1>
              <h4>s c o r e  k e e p e r</h4>
            </SidebarHeader>
            <Menu iconShape="square">
              <MenuItem class="menu-item">about</MenuItem>
              <MenuItem class="menu-item">how it works</MenuItem>
              <MenuItem class="menu-item">demo</MenuItem>
            </Menu>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem class="menu-item">team</MenuItem>
                <MenuItem class="menu-item">contact</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
    )
}

export default Sidebar