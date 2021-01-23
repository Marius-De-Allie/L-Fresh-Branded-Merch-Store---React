import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const CategoryItem = ({ imgUrl, catName }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/shop/${catName}`);
    console.log('redirect');
  };
  
  
  
  return (
    <li 
      className="category-card"
      style={{listStyle: "none", display: "block", width: '100%', margin: '0 .25rem', padding: '0 1rem'}}
    >
      <div
        className="cat-container"
        onClick={handleClick}
      >
        <p className="cat-text">{catName.toUpperCase()}</p>
        <div
          className="cat-img"
        >
          <img 
            src={imgUrl}
            alt={catName}
            width="100%"
            height="95%"
          />
        </div>
        </div>
    </li>

  );
}


export default CategoryItem;