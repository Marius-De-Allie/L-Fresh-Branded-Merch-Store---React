import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = ({ match }) => {
  const selectedCatId = match.params.catId;
  const transformedProducts = useSelector(state => {
    const products = state.products;
    const productsArray = [];
    // loop over each key in the products object.
    for(let key in products) {
      // If current products catId property is equal to catId url param then add to products array.
      if(products[key].catId === selectedCatId) {
        // add each product object to products array.
        productsArray.push({
          id: key,
          ...products[key]
        });
      }
    };
    // Return transformed array of products.
    return productsArray;
  });


  if(transformedProducts.length > 0)  console.log(transformedProducts);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      {transformedProducts.map(item => <Item key={item.ItemName} item={item} />)}
    </div>
  );
};

export default ItemList;