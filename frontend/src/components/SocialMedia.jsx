import React from 'react';
import { motion } from 'framer-motion';
import {BsTwitter, BsInstagram } from 'react-icons/bs';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <motion.div whileHover={{ scale: 1.1 }}>
            <BsInstagram/>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
            <BsTwitter/>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
            <FaGithub/>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
            <FaLinkedin/>
        </motion.div>
    </div>
  )
}

export default SocialMedia