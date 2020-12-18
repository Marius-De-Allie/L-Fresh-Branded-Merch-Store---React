import React from 'react';
import CategoryItem from './CategoryItem';
import categoryData from '../utils/_data';

// TODOD - REFACTOR render CategoryList passing in categories as prop.
const ShopPage = () => {

  // Convert categories object to an array.
  const categories = Object.keys(categoryData).map(el => categoryData[el]);

  return (
    <div className="cat-list" style={{display: 'flex', justifyContent: 'center'}}>
      <ul style={{width: '100%', padding: '0', display: 'flex', justifyContent: 'space-around'}}>
        {categories.map(cat => 
          <CategoryItem 
            key={cat.name}
            {...cat} 
          />
          )
        }
      </ul>
      
    </div>
  );
};

export default ShopPage;