import React from 'react';
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from '../../constants';

const scaleVariant = {
    whileInView : {
      scale: [0,1],
      opacity: [0,1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
}

const languages = [images.python, images.cpp, images.react, images.javascript];

const Header = () => {
  return (
    <div id='home' className='app__Header app__flex'>
      <motion.div
        whileInView={{x : [-100,0], opacity: [0,1]}}
        transition = {{duration: 2 }}
        className="app__Header-info"
      >
        <div className="app__Header-badge">
          <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{marginLeft: 20}}>
                <p className='p-text p-name'>Hi there, I am </p>
                <h1 className='name'>Aman Singh Bhogal</h1>
              </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className="p-text">Machine Learning</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0,1]}}
        transition = {{duration: 2, delayChildren: 0.5 }}
        className="app__Header-img"
      >
        <img src={images.profile} alt="Aman Pic" />

      </motion.div>
      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__Header-circles"
      >
        {
          languages.map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt='languages' />
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Header