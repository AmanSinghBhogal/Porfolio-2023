import React, {useState, useEffect } from 'react';
import './About.scss';
import { motion } from "framer-motion/dist/framer-motion";
import { images } from '../../constants';

const abouts = [
  {
      title: 'Web Development',
      description: "Lorem Epson",
      imgurl: images.node
  },
  {
      title: 'Machine Learning',
      description: "Humpty Dumpty sat on a wall... he fell down.. ha ha ha",
      imgurl: images.python
  },
  {
      title: 'C++',
      description: "Lorem Epson",
      imgurl: images.cpp
  }
];

const About = () => {
  return (
    <div id='#about' className='app__about' >
      <h2 className='head-text'>
        I turn tech problems into 
        <span> solutions,</span> 
        <br />
        bringing ease to every
        <span> execution.</span>
      </h2>
      <div className='app__profiles'>
        {
          abouts.map((item,index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{ scale: 1.1 }}
              transition= {{ duration: 0.5, type: 'tween' }}
              className="app__about-item"
              key={item.title + index}
            >
              <img src={item.imgurl} alt={item.title} />
              <h2 className='app__profiles-title' style={{marginTop: "20px"}}>{item.title}</h2>
              <p className='app__profiles-description' style={{marginTop: "10px"}}>{item.description}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default About