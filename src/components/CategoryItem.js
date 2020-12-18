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
      style={{listStyle: "none", display: "block", width: '100%', margin: '0 .25rem'}}
    >
      <div 
        className="cat-img" 
        style={{width: "100%", height: '300px', cursor: 'pointer', position: 'relative'}}
        onClick={handleClick}
      >
        <img 
          src={imgUrl}
          alt={name}
          width="100%"
          height="300px"
        />
        <p style={{position: 'absolute', top: '0', bottom: '0', left: '0', right: '0'}}>{`SHOP ${name.toUpperCase()}`}</p>
        
        </div>
    </li>

  );
}


export default CategoryItem;