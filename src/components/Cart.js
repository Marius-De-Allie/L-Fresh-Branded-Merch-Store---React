import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);
  const history = useHistory();

  // Check out button click handler fn.
  const checkoutHandler = () => {
    // check whether cart is empty.
    if(cart.length > 0) {
      // Navigate to '/checkout' route.
      history.push('/checkout');
    }
  };

  return (
    <div className="cart-container" style={{flexDirection: 'column', width: '900px', margin: '20px auto', display: 'flex'}}>
      <table>
      <thead>
        <tr>
          <th>image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map(cartItem => (
          <tr>
            <td></td>
            <td>{cartItem.name}</td>
            <td>{cartItem.quantity}</td>
            <td>${cartItem.totalPrice.toFixed(2)}</td>
            <td>X</td>
          </tr>
        ))}
      </tbody>
      </table>
      <div className="checkout">
        <p>Total: <span className="cart-total">${cart.sum.toFixed(2)}</span></p>
        <div className="checkout-btn" onClick={checkoutHandler}>
          Checkout
        </div>
      </div>
    </div>
  );
};

export default Cart;