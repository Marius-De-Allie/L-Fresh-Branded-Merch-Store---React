import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const CategoryItem = ({ imgUrl, name }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/shop/${name}`);
    console.log('redirect');
  };
  
  
  
  console.log(imgUrl);
  return (
    <li 
      className="category-card"
      style={{listStyle: "none", display: "block", width: '100%', margin: '0 .25rem', padding: '0 1rem'}}
    >
      <div
        className="cat-container"
        style={{
          width: "100%", 
          height: '400px', 
          position: 'relative',
          backgroundColor: 'white',
          boxShadow: '2px 7px 9px rgba(0, 0, 0, 0.4)',
          cursor: 'pointer'
        }}
        onClick={handleClick}
      >
        <p className="cat-text">{name.toUpperCase()}</p>
        <div
          className="cat-img"
        >
          <img 
            src={imgUrl}
            alt={name}
            width="100%"
            height="95%"
          />
        </div>
        </div>
    </li>

  );
}


export default CategoryItem;