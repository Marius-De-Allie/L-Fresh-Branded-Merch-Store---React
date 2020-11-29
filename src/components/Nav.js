import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

const Nav = () => (
  <nav className="nav-bar" 
    style={{
      border: '1px solid grey',
      // position: 'fixed',
      // top: '0px',
      // left: '0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      
    }}
  >
    <div>
      <NavLink className="nav-links" to="/">Home</NavLink>
    </div>
    <div>
      <NavLink className="nav-links" to="/">Shop</NavLink>
    </div>
    <div>
      <NavLink className="nav-links" to="/signin">Sign In</NavLink>
    </div>
    <div style={{cursor: 'pointer', justifySelf: 'flex-end'}} >
      <FaShoppingCart color="white" />
    </div>
  </nav>
);

export default Nav;