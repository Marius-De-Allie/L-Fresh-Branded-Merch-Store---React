import React from 'react';

const CategoryItem = ({ image_url, description }) => (
  <div className="category-card">
    <div className="cat-img">
      <img 
        src={image_url}
        alt={description}  
      />
    </div>
  </div>
);

export default CategoryItem;