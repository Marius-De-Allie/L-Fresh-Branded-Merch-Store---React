import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeItem } from '../redux/actions/cart';

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const removeItemHandler = (id) => {
    // dispatch REMOVE_ITEM action.
    dispatch(removeItem(id));
  }

  // Check out button click handler fn.
  const checkoutHandler = () => {
    // check whether cart is empty.
    if(cart.items.length > 0) {
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
              <td>
                <div style={{cursor: 'pointer', border: '1px solid red'}} onClick={() => {
                  console.log('REMOVE')
                  removeItemHandler(cartItem.id)}}>X</div>
              </td>
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