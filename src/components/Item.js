import React from 'react';
import ItemSize from './ItemSize';

const Item = ( { item }) => {

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
            <p>size</p>
            <div className="sizes">
              {item.size.map(size => <ItemSize key={size} size={size} />)}
            </div>

            
          </div>
          <div className="quantity-container">
            <p>quantity</p>
            <p>- 1 +</p>
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

