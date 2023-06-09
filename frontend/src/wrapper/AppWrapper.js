import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

// HOC Stands for Higher Order Component 

const AppWrapper = (Component, idName) => function HOC() {
  return (
    <div id={idName} className={`app_container`}>
        <SocialMedia />
        <div className='app__wrapper'>
            <Component />
            <div className='copyright'>
                <p className='p-text'>&copy;{(new Date().getFullYear())} | Aman Singh Bhogal</p>
                <p className='p-text'>All Rights Reserved</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrapper;