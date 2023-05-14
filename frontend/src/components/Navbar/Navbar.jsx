import React, {useState} from 'react';
import "./Navbar.scss";
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from "framer-motion"
import { images } from '../../constants';

var elements = ["Home","About","Projects","Skills","Contact"];

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className='app__Navbar'>
      <div className='app__Navbar-logo'>
        <img src={images.logo} alt="Aman Singh Bhogal"/>
      </div>
      <ul className='app__Navbar-links'>
        {
          elements.map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>
      <div className='app__Navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {
          Toggle && (
            <motion.div
              whileInView={{x: [300,0]}}
              transition={{duration:0.35, ease: 'easeOut'} }
            >
                <HiX onClick={() => setToggle(false)} />
                <ul> 
                  {
                    elements.map((item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                      </li>
                    ))
                  }
                </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;