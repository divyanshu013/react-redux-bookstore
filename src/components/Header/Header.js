import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const styles = {
  padding: 5,
  margin: 5
};

const activeStyles = {
  border: '1px solid black',
  borderRadius: 5
};

const Header = () => (
  <div className="header">
    <Menu secondary>
      <h2>React-Redux Bookstore</h2>
      <Menu.Menu position="right">
        <NavLink to="/" activeStyle={activeStyles} style={styles} exact>
          Home
        </NavLink>
        <NavLink to="/books" activeStyle={activeStyles} style={styles}>
          Books
        </NavLink>
        <NavLink to="/about" activeStyle={activeStyles} style={styles}>
          About
        </NavLink>
      </Menu.Menu>
    </Menu>
  </div>
);

export default Header;
