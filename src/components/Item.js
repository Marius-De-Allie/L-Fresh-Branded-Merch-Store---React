import React from 'react';

const Item = ( { item }) => {

  return (
    <div style={{margin: '0 0.5rem'}}>
      <h3>{item.ItemName}</h3>
      <img src={item.imgUrl} alt={item.itemName} style={{width: '275px'}}/>
      <div className="item-txt-container" style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="size-container" style={{display: 'flex'}}>
          {item.size.map(size => <p>{size}</p>)}
        </div>
        <p>{`price: $${item.price}`}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Item;