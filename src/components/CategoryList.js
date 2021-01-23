import React from 'react';
import CategoryItem from './CategoryItem';
import categoryData from '../utils/_data';

const cats = ['hoodies', 'shirts', 'headWear'];
const CategoryList = () => {


  return (
    <div className="cat-list" style={{display: 'flex', justifyContent: 'center'}}>
      <ul style={{width: '100%', padding: '0', display: 'flex', justifyContent: 'space-around'}}>
        {cats.map((cat, idx) => 
          <CategoryItem 
            key={idx}
            catName={cat}
          />
          )
        }
      </ul>
      
    </div>
  )
};

export default CategoryList;