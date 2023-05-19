import React, { useState } from 'react';
import './Footer.scss';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { motion } from 'framer-motion';
// import { client } from '../../client';
import emailjs from 'emailjs-com';

const Footer = () => {
  
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    msg: ""
  });

  const [SubmittedForm, setSubmittedForm] = useState(false);
  const [Loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target; 
    setFormData({ ...FormData, [name] : value});
  };

  const handleSubmit = async () => {
    setLoading(true);
    // receiving msgs using Sanity:
    const contact = {
      from_name: FormData.name,
      email_id: FormData.email,
      message: FormData.msg
    }

    // Sending the msg to Sanity Backend Database.
    // client.create(contact)
    // .then(() => {
    //   setLoading(false);
    //   setSubmittedForm(true);
    // })

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      'template_x0k66i7', 
      contact, 
      process.env.REACT_APP_EMAILJS_TOKEN
    ).then(() => {
        setLoading(false);
        setSubmittedForm(true);
      });

    
  };

  return (
    <div 
      id='contact'
      className='app__contact'
    >
      <h2 className='head-text'>Take A Coffee <span>& Chat With Me</span></h2>
      <div className="app__footer-cards">
        <div className='app__footer-card'>
          <img src={images.email} alt='Email img'/>
          <a href="mailto:bhogalamansingh22@gmail.com" className='card-text'>bhogalamansingh22@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='Mobile img'/>
          <a href="tel:+91-9427461183" className='card-text'>+91-9427461183</a>
        </div>
      </div>   
      {
        SubmittedForm?
          <h2 className='head-text'><span>Thank you!</span> for getting in touch.</h2>
          :
          <div className='app__footer-form app__flex'> 
            <div className='app__flex'>
              <input 
                className='form-inputText' 
                name='name'
                type='text' 
                placeholder='Your Name' 
                value={FormData.name} 
                onChange={handleChangeInput} 
              />
            </div>
            <div className='app__flex'>
              <input 
                name='email'
                className='form-inputText' 
                type='email' 
                placeholder='Your Email' 
                value={FormData.email} 
                onChange={handleChangeInput} 
              />
            </div>
            <div>
              <textarea 
                className='form-inputText'
                name="msg"
                value={FormData.msg} 
                onChange={handleChangeInput} 
                cols="30" 
                rows="10" 
                placeholder='Your Message' 
              />
            </div>
            <motion.button 
              whileHover={{scale: [1, 1.1]}}
              type='button' 
              className='p-text' 
              onClick={handleSubmit}
            >
              {Loading ? 'Sending...' : 'Send Message'}
            </motion.button>
        </div>
      }
    </div>
  )
}

export default AppWrapper(MotionWrap(Footer), 'contact');