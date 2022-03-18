import React from 'react';

const Menu = ({ menuItems }) => {

  return (
    <div className='section-center'>
      {menuItems.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          
        )
      })}
    </div>
  );
};

export default Menu;
