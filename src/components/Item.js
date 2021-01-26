import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemSize from './ItemSize';
import { addToCart } from '../redux/actions/cart';

/* use reducer logic */
const SET_SIZE = 'SET_SIZE';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const RESET = 'RESET';

// Initial cartItem state.
const initialState = {
  size: null,
  quantity: 1
};
// cartItem Reducer.
const cartItemReducer = (state, action) => {
  switch(action.type) {
    case SET_SIZE:
      return {
        ...state,
        size: action.size
      };
    case UPDATE_QUANTITY:
      let updatedQuantity = action.direction === 'minus' ? state.quantity - 1 : state.quantity + 1;
     
      return {
        ...state,
        quantity: updatedQuantity
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const Item = ( { item }) => {
  const cart = useSelector(state => state.cart);
  const reduxDispatch = useDispatch();
  const [cartItem, dispatch] = useReducer(cartItemReducer, initialState);

  const selectSizeHandler = (selectedSize) => {
    console.log(`selected ${selectedSize}`);
    dispatch({
      type: SET_SIZE,
      size: selectedSize
    });
  };

  const selectQuantityHandler = (direction) => {
    dispatch({
      type: UPDATE_QUANTITY,
      direction
    });
  };

  const addToCartHandler = () => {
    // 1. check whether item size was selected before adding to cart.
    if(cartItem.size) {
    // 2. if product size selected then dispatch ADD_TO_CART redux action.
      // Dispatch addToCart action, passing in cart item data.
      reduxDispatch(addToCart(item.name, cartItem.size, item.price, cartItem.quantity, item.price * cartItem.quantity));
      // dispatch useReducer RESET action.
      dispatch({type: RESET});
    }
  };

  // console.log(cartItem);
  console.log('MY CART', cart);

  return (
    <div className="item-container">
      <div className="item-image-container">
        <img src={item.imgUrl} alt={item.name} className="image"/>
        <div 
          className="plus-cart" 
          onClick={addToCartHandler}
         >
          <p className="cart-btn-txt">
            Add to Cart
          </p>
        </div>
      </div>
      <div className="item-details-container">
        <div className="item-details">
          <p className="name-text">{item.name}</p>
          <p className="price-text">${item.price.toFixed(2)}</p>
        </div>
        <div className="choice-container">
          <div className="size-container">
            <p style={{marginBottom: 3}}>size</p>
            <div className="sizes">
              {item.size.map(size => <ItemSize key={size} size={size} onSelect={selectSizeHandler} cartItemSize={cartItem.size} />)}
            </div>

            
          </div>
          <div className="quantity-container">
            <p style={{marginBottom: 3}}>quantity</p>
            <div className="quantity-buttons">
              <div className="quantity-btn" onClick={() => {
                if(cartItem.quantity > 1) {
                  selectQuantityHandler('minus')
                }
                }}>-</div>
              <p>{cartItem.quantity}</p>
              <div className="quantity-btn" onClick={() => {
                if(cartItem.quantity < 10) {
                  selectQuantityHandler('plus')
                  
                }
                }}>+</div>
            </div>
          </div>
        </div>
    
 
      </div>
     
    </div>
  );
};

export default Item;
// <div className="item-details">
// <p className="name">{item.name}</p>
// <p className="price">${item.price.toFixed(2)}</p>
// </div>

// <div className="choice-container">
// <div className="size-container">
//   <p>size</p>
//   <div className="sizes">
//     {item.size.map(size => <ItemSize key={size} size={size} />)}
  
//   </div>
  
// </div>
// <div className="quantity-container">
//   <p>quantity</p>
//   <p>- 1 +</p>
// </div>
// </div>

// <h3>{item.name}</h3>
// <div className="item-txt-container" style={{display: 'flex', justifyContent: 'space-between'}}>
// <div className="size-container" style={{display: 'flex'}}>
//   {item.size.map(size => <ItemSize key={size} size={size} />)}
// </div>
// <p><span>${item.price.toFixed(2)}</span></p>
// </div>

// <button 
// className="cart-btn"
// onClick={() => console.log('clicked!')}
// >
// Add to Cart
// </button>

