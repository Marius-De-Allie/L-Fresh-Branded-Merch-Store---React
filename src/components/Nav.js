import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-bar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Shop</NavLink>
    <NavLink to="/signin">Sign In</NavLink>
  </nav>
);

export default Nav;