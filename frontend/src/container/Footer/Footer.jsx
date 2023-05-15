import React from 'react';
import './Footer.scss';
import { AppWrapper } from '../../wrapper';

const Footer = () => {
  return (
    <div 
      id='contact'
      className='app__contact'
    >
      Footer
    </div>
  )
}

export default AppWrapper(Footer, 'contact');