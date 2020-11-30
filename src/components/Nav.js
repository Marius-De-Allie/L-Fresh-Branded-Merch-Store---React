import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const Nav = () => (
  <div 
    // style={{border: '1px solid grey',
    //     backgroundColor: 'grey'
    //   }}
  >
    <h1 className="logo">LOGO</h1>
    

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
        // border: '1px solid grey',
        // backgroundColor: 'grey'
        
      }}
    >
      <div>
        <NavLink className="nav-links" to="/">Home</NavLink>
      </div>
      <div>
        <NavLink className="nav-links" to="/">Shop</NavLink>
      </div>
      <div>
        <NavLink className="nav-links" to="/signin"><FaUserCircle color="black" /> Sign In </NavLink>
      </div>
      <div>
        <FaShoppingCart color="black" />
        View Cart
      </div>
    </nav>
  </div>
);

export default Nav;