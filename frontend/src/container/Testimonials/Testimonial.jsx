import React from 'react';
import "./Testimonials.scss";
import { AppWrapper } from '../../wrapper';

const Testimonial = () => {
  return (
    <div 
      id='testimonials'
      className='app__testimonials'
    >
      Testimonial
    </div>
  )
}

export default AppWrapper(Testimonial, 'testimonials');