import React from 'react';

const CategoryItem = ({ imgUrl, name }) => console.log(imgUrl)||(
  <li 
    className="category-card"
    style={{listStyle: "none", display: "block", margin: ".25rem"}}
  >
    <p>{name}</p>
    <div className="cat-img" style={{width: "100%"}}>
      <img 
        src={imgUrl}
        alt={name}
        width="200px"
        height="300px"
      />
    </div>
  </li>
);

export default CategoryItem;