import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { TiShoppingCart } from 'react-icons/ti';
import { RiUser3Line, RiShoppingCart2Line } from 'react-icons/ri'
// import { FaUserCircle } from 'react-icons/fa';

const Nav = () => {
  const cartItems = useSelector(state => state.cart.totalItems);

  return (
    <div 
    // style={{border: '1px solid grey',
    //     backgroundColor: 'grey'
    //   }}
    style={{maxWidth: '900px',
    margin: '0 auto'}}
  
    >
      <div className="upper-nav-container">
        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', visibility: 'hidden'}}>
          <NavLink className="upper-nav-links" to="/signin"><RiUser3Line color="salmon" /></NavLink>
          <NavLink className="upper-nav-links" to="/">
            <RiShoppingCart2Line color="salmon" /> 
          </NavLink>
        </div>
        <h1 className="logo">LOGO</h1>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          <NavLink className="upper-nav-links" to="/signin"><RiUser3Line color="salmon" size={18} /></NavLink>
          <NavLink className="upper-nav-links" to="/cart">
            <RiShoppingCart2Line color="salmon" size={18} />
          </NavLink>
          {cartItems > 0 && <sub style={{textDecoration:'', alignSelf: 'flex-end', color: 'salmon'}}>{cartItems}</sub>}
        </div>
      </div>
      <nav className="nav-bar" 
        style={{
          // position: 'fixed',
          // top: '0px',
          // left: '0px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          // maxWidth: '900px',
          // margin: '0 auto'
          // border: '1px solid grey',
          // backgroundColor: 'grey'
          
        }}
      >
        <div>
          <NavLink className="nav-links" to="/">Home</NavLink>
        </div>
        <div>
          <NavLink className="nav-links" to="/shop/hoodies">Hoodies</NavLink>
        </div>
        <div>
          <NavLink className="nav-links" to="/shop/shirts">Shirts</NavLink>
        </div>
        <div>
          <NavLink className="nav-links" to="/shop/headwear">HeadWear</NavLink>
        </div>
      
      </nav>
    </div>
  );
};

export default Nav;