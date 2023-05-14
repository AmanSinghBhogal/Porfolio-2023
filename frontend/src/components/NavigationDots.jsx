import React from 'react';
var elements = ["Home","About","Projects","Skills","Testimonials","Contact"];


const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {
          elements.map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
    </div>
  )
}

export default NavigationDots;