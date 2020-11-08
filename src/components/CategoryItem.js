import React from 'react';

const CategoryItem = ({ imgUrl, name }) => console.log(imgUrl)||(
  <li className="category-card">
    <div className="cat-img">
      <img 
        src={imgUrl}
        alt={name}
      />
    </div>
  </li>
);

export default CategoryItem;