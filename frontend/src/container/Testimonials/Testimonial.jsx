import React, { useState, useEffect } from 'react';
import "./Testimonials.scss";
import { AppWrapper,MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import  { client, urlFor } from '../../client';

const Testimonial = () => {
  const [Testimonials, setTestimonials] = useState([]);
  const [CurrentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type=="testemonials"]';

    client.fetch(query)
    .then((data) => 
          setTestimonials(data.sort((x, y) => {
            return new Date(x._updatedAt) < new Date(y._updatedAt) ? 1 : -1
          }))
    )
    .catch(console.error);

    console.log(Testimonials);

  }, []);

  const test = Testimonials[CurrentIndex];

  const handleClick = (index) => (setCurrentIndex(index));

  return (
    <div 
      id='testimonials'
    >
      {
        Testimonials.length && (
          <>
              <div className='app__testimonials'>
                <img src={urlFor(test.imageurl)} />
                <div className='app__testimonials-content'> 
                  <p className='p-text'>{test.feedback}</p>
                  <div>
                    <h4 className='bold-text'>{test.name}</h4>
                    <h5 className='p-text'>{test.company}</h5>
                  </div>
                </div>
              </div>
              <div className='app__testimonials-btns app__flex'>
                <div 
                  className='app__flex'
                  onClick={() => handleClick(CurrentIndex === 0? Testimonials.length - 1 : CurrentIndex - 1)}
                > 
                  <HiChevronLeft />
                </div>
                <div 
                  className='app__flex'
                  onClick={() => handleClick(CurrentIndex === Testimonials.length - 1? 0 : CurrentIndex + 1)}
                > 
                  <HiChevronRight />
                </div>
              </div>
          </>
        )
      }
    </div>
  )
}

export default AppWrapper(
  MotionWrap(Testimonial), 
  'testimonials'
);