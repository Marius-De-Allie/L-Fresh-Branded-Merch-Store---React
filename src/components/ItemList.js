import React from 'react';
import Item from './Item';
import categoryData from '../utils/_data';

const ItemList = ({ match }) => {

  let items = Object.keys(categoryData).map(el => categoryData[el]);
  items = items.filter(item => item.name === match.params.catId)[0].items;
  console.log('CATITEMS', items);
  // categories.filter(el => )

  return (
    <div>
      Item List
    </div>
  );
};

export default ItemList;