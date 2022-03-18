import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItem] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories menuItems={menuItems} />
        <Menu />
      </section>
    </main>
  )
}

export default App;
