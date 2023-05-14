import React from 'react';
var elements = ["home","about","projects","skills","testimonials","contact"];


const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {
          elements.map((item) => (
            <a 
                key={`link-${item}`} 
                href={`#${item}`}
                className='app__navigation-dot'
                style={active === item ? {backgroundColor: '#DCCA87'} : {}}
            > </a>
          ))
        }
    </div>
  )
}

export default NavigationDots;