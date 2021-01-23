import React from 'react';
import CategoryItem from './CategoryItem';

const cats = [
  {name: 'hoodies', imgUrl: 'https://images.pexels.com/photos/2080734/pexels-photo-2080734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}, 
  {name: 'shirts', imgUrl: 'https://images.pexels.com/photos/3140049/pexels-photo-3140049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}, 
  {name: 'headWear', imgUrl: 'https://images.pexels.com/photos/4142539/pexels-photo-4142539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
];
const CategoryList = () => {


  return (
    <div className="cat-list" style={{display: 'flex', justifyContent: 'center'}}>
      <ul style={{width: '100%', padding: '0', display: 'flex', justifyContent: 'space-around'}}>
        {cats.map((cat, idx) => 
          <CategoryItem 
            key={idx}
            catName={cat.name}
            imgUrl={cat.imgUrl}
          />
          )
        }
      </ul>
      
    </div>
  )
};

export default CategoryList;