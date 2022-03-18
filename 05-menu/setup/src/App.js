import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

let allCategories = new Set(items.map((item) => item.category));
function App() {
  const [menuItems, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(['all', ...allCategories]);

  const filterItems = (category) => {
    if (category !== 'all') {
      const newItem = items.filter((item) => {
        if (item.category === category) {
          return item;
        }
      })
      setMenuItem(newItem);
    }
    else {
      setMenuItem(items);
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App;
