import React, { useReducer } from 'react';
import ItemSize from './ItemSize';

/* use reducer logic */
const SET_SIZE = 'SET_SIZE';

// Initial cartItem state.
const initialState = {
  id: null,
  itemName: null,
  size: null,
  price: null,
  quantity: null
};
// cartItem Reducer.
const cartItemReducer = (state, action) => {
  switch(action.type) {
    case SET_SIZE:
      return {
        ...state,
        size: action.size
      };
    default:
      return state;
  }
};

const Item = ( { item }) => {
  const [cartItem, dispatch] = useReducer(cartItemReducer, initialState);

  const selectSizeHandler = (selectedSize) => {
    console.log(`selected ${selectedSize}`);
    dispatch({
      type: SET_SIZE,
      size: selectedSize
    });
  };

  console.log(cartItem);

  return (
    <div className="item-container">
      <div className="item-image-container">
        <img src={item.imgUrl} alt={item.itemName} className="image"/>
        <div 
          className="plus-cart" 
         >
          <p className="cart-btn-txt">Add to Cart</p>
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
              {item.size.map(size => <ItemSize key={size} size={size} onSelect={selectSizeHandler} />)}
            </div>

            
          </div>
          <div className="quantity-container">
            <p style={{marginBottom: 3}}>quantity</p>
            <div className="quantity-buttons">
              <div style={{fontSize: '18px'}}>-</div>
              <p>1</p>
              <div style={{fontSize: '18px'}}>+</div>
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

