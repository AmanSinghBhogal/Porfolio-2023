import React from 'react';
import { motion } from 'framer-motion';
import {BsTwitter, BsInstagram } from 'react-icons/bs';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <motion.div whileHover={{ scale: 1.1 }}>
            <a href="https://www.instagram.com/asb_0002/" target='_blank' rel="noreferrer"><BsInstagram/></a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
            <a href='https://twitter.com/AmanSinghBhoga1' target='_blank' rel="noreferrer"><BsTwitter/></a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
            <a href="https://github.com/AmanSinghBhogal" target='_blank' rel="noreferrer"><FaGithub/> </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
            <a href='https://www.linkedin.com/in/aman-singh-bhogal/' target='_blank' rel="noreferrer"><FaLinkedin/></a>
        </motion.div>
    </div>
  )
}

export default SocialMedia