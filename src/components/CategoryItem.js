import React from 'react';
import { Lin, useHistory } from 'react-router-dom';

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
      style={{listStyle: "none", display: "block", margin: ".25rem"}}
    >
      <div 
        className="cat-img" 
        style={{width: "100%", cursor: 'pointer'}}
        onClick={handleClick}
      >
        <img 
          src={imgUrl}
          alt={name}
          width="200px"
          height="300px"
        />
        <p>{name}</p>
        
        </div>
    </li>

  );
}


export default CategoryItem;