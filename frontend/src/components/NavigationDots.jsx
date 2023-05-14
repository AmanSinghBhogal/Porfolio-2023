import React from 'react';
var elements = ["Home","About","Projects","Skills","Testimonials","Contact"];


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
            />
          ))
        }
    </div>
  )
}

export default NavigationDots;