import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      {/* later move the title section into a separate component */}
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {/* iterating the data.js file */}
        {people.map((person, personIndex) => {
          // destructring the properties from the data.js file
          const { id, image, name, title, quote } = person;
          // conditions for changing the slide positions
          let position = 'nextSlide';
          if(personIndex === index){
            position = 'activeSlide';
          }
          // if the personIndex equals index -1 or 0 AND personIndex equals the total number of items in the array -1 add the class of lastSlide
          if(personIndex === index - 1 || (index === 0 && personIndex === people.length -1)){
            position = 'lastSlide'
          }
          // later move the person section into a separate component
          return (
            <article className= {position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        {/* later move the buttons into a separate component */}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
