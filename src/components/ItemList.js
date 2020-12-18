import React from 'react';
import Item from './Item';
import categoryData from '../utils/_data';

const ItemList = (props) => {

  const categories = Object.keys(categoryData).map(item => categoryData[item]);

  return (
    <div>
      Item List
    </div>
  );
};

export default ItemList;