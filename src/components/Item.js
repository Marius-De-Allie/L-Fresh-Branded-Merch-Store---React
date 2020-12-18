import React from 'react';

const Item = ( { item }) => {

  return (
    <div>
      <h3>{item.ItemName}</h3>
      <img src={item.imgUrl} alt={item.itemName} style={{width: '100%'}}/>
      <div className="size-container">
        {item.size.map(size => <span>{size}</span>)}
      </div>
      <p>{`price: $${item.price}`}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Item;