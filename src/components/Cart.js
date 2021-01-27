import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

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
        <div className="checkout-btn">Checkout</div>
      </div>
    </div>
  );
};

export default Cart;