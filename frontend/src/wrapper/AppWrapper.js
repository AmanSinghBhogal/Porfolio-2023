import React from 'react';
import {BsTwitter, BsInstagram } from 'react-icons/bs';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

const AppWrapper = () => {
  return (
    <div className='app__social'>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <FaGithub/>
        </div>
        <div>
            <FaLinkedin/>
        </div>
    </div>
  )
}

export default AppWrapper;