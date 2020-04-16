import React from 'react';

const Item = ({item, id, completed, toggleItem}) => {
  return (
    <div
      className={`item${completed ? ' completed' : ''}`}
      onClick={() => toggleItem(id)}
    >
      <p>{item}</p>
    </div>
  );
};

export default Item;