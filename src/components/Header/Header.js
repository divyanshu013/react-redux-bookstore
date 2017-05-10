import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h2>React Redux Book Store</h2>
    <NavLink to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/about" activeClassName="active">About</NavLink>
  </div>
);

export default Header;
