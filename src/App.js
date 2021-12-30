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
        {people.map((person, personIndex)=> {
          // destructring the properties from the data.js file
          const {id, image, name, title, quote} = person;
          // more stuff coming up
          // later move the person section into a separate component
          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          )
        })}
      </div>
    </section>
  );
}

export default App;
