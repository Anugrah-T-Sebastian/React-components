import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [reviews, setReview] = useState(data);
  const [value, setValue] = useState(0);

  const nextBtn = () => {
    setValue((value + 1) % data.length);
  }

  const prevBtn = () => {
    setValue((value - 1 + data.length) % data.length)
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {
          reviews.map((person, index) => {
            const { id, image, name, title, quote } = person;

            let position = 'nextSlide';
            if (index === value) {
              position = 'activeSlide';
            }
            if (index === (value - 1 + data.length) % data.length) {
              position = 'lastSlide'
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <h4 className='title'>{title}</h4>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            )
          })
        }
        <button className='prev' onClick={() => prevBtn()}><FiChevronLeft /></button>
        <button className='next' onClick={() => nextBtn()}><FiChevronRight /></button>
      </div>
    </section>
  );
}

export default App;
