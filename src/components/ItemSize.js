import React from 'react';

const ItemSize = ({ size, onSelect }) => {

  // Function that renders text equivalent of size array element.
  const renderSize = () => {
    switch(size) {
      case 'small':
        return 's';
      case 'medium':
        return 'm';
      case 'large':
        return 'l';
      default:
        return size;
    }
  };

  return <div className="size-item" onClick={() => onSelect(size)}>
    <p className="size-txt">{renderSize()}</p>
  </div>
};

export default ItemSize;