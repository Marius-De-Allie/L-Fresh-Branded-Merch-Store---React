import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-bar" 
    style={{
      border: '1px solid grey',
      // position: 'fixed',
      // top: '0px',
      // left: '0px',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'grey',
      
    }}
  >
    <NavLink className="nav-links" to="/">Home</NavLink>
    <NavLink className="nav-links" to="/">Shop</NavLink>
    <NavLink className="nav-links" to="/signin">Sign In</NavLink>
  </nav>
);

export default Nav;