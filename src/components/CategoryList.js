import React from 'react';
import CategoryItem from './CategoryItem';
import categoryData from '../utils/_data';

const CategoryList = () => {
  const categories = Object.keys(categoryData);

  console.log(categoryData);

  return (
    <div className="cat-list">
      
    </div>
  )
};

export default CategoryList;