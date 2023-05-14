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
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className='badge-cmp app__flex'
          >
              <span>👋</span>
              <div style={{marginLeft: 20}}>
                <p className='p-text p-name'>Hi there, I am </p>
                <h1 className='name'>Aman Singh Bhogal</h1>
              </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className='tag-cmp app__flex'
          >
            <p className='p-text'>Web Developer</p>
            <p className="p-text">Machine Learning</p>
          </motion.div>
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
            <motion.div 
              className='circle-cmp app__flex' 
              key={`circle-${index}`}
              whileHover={{ scale: 1.1 }}
            >
              <img src={circle} alt='languages' />
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Header