import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div style={{width: '900px', margin: '20px auto', display: 'flex', justifyContent: 'center'}}>
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
            <td>{cartItem.totalPrice}</td>
            <td>X</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default Cart;