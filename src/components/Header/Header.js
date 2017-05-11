import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header = () => (
  <div className="header">
    <Menu secondary>
      <h2>React-Redux Bookstore</h2>
      <Menu.Menu position="right">
        <NavLink to="/">
          <Menu.Item name="home" active />
        </NavLink>
        <NavLink to="/books">
          <Menu.Item name="books" />
        </NavLink>
        <NavLink to="/about">
          <Menu.Item name="about" />
        </NavLink>
      </Menu.Menu>
    </Menu>
  </div>
);

export default Header;
