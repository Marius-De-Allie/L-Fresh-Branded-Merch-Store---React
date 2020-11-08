import React from 'react';
import CategoryItem from './CategoryItem';
import categoryData from '../utils/_data';

const CategoryList = () => {
  // Convert categories object to an array.
  const categories = Object.keys(categoryData).map(el => categoryData[el]);

  console.log(categories);

  return (
    <div className="cat-list">
      <ul style={{display: "flex", justifyContent: "center"}}>
        {categories.map(cat => 
          <CategoryItem 
            key={cat.name}
            {...cat} 
          />
          )
        }
      </ul>
      
    </div>
  )
};

export default CategoryList;