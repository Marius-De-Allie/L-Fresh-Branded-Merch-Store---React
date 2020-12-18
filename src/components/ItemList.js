import React from 'react';
import Item from './Item';
import categoryData from '../utils/_data';

const ItemList = ({ match }) => {

  let items = Object.keys(categoryData).map(el => categoryData[el]);
  items = items.filter(item => item.name === match.params.catId)[0].items;
  console.log('CATITEMS', items);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      {items.map(item => <Item key={item.ItemName} item={item} />)}
    </div>
  );
};

export default ItemList;