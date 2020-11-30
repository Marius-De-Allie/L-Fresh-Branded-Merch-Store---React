import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

const Nav = () => (
  <div 
  style={{border: '1px solid grey',
        backgroundColor: 'grey'
      }}
  >
    <nav className="nav-bar" 
      style={{
        // position: 'fixed',
        // top: '0px',
        // left: '0px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxWidth: '900px',
        margin: '0 auto'
        
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
  </div>
);

export default Nav;