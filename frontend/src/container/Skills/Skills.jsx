import React, {useState, useEffect} from 'react';
import "./Skills.scss";
import {AppWrapper, MotionWrap} from '../../wrapper';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import  { client, urlFor } from '../../client';

const Skills = () => {
  const [Skills, setSkills] = useState([]);
  const [Experiences, setExperiences] = useState([]);


  useEffect(() => {
    const query = '*[_type=="skills"]';
    const ExperienceQuery = '*[_type=="experience"]';
    
    client.fetch(query)
    .then((data) => setSkills(data))
    .catch(console.error);


    client.fetch(ExperienceQuery)
    .then((data) => 
              setExperiences(data.sort((x, y) => {
                return new Date(x._updatedAt) < new Date(y._updatedAt) ? 1 : -1
              }))
    ).catch(console.error);

  }, [])
  


  return (
    <div 
      className='app__skillsExperience'
      id='skills'
    >
      <h2 className='head-text'><span>Skills & Experience</span></h2>
      <div className='app__skills-container'>
        <motion.div
          className='app__skills-list'
        >
          {
            Skills.map((skill,index) => (
              <motion.div
                whileInView={{opacity: [0,1]}}
                whileHover={{scale: [1,1.1]}}
                transition={{duration: 0.5}}
                className='app__skills-item app__flex'
                key={index}
              >
                <div className='app__flex'>
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className='p-text skill-name'>{skill.name}</p>
              </motion.div>
            ))
          }
        </motion.div>
        <motion.div
          className='app__skills-exp'
        >
          {
            Experiences.map((experience, index) => (
              <motion.div 
                whileInView={{opacity: [0,1]}}
                transition={{duration: 0.5}}
                className='app__experience-list' 
                key={index}
              >
                  <motion.div className='app__skills-exp-img'>
                    <img src={urlFor(experience.work[0].imgurl)} alt="" />
                  </motion.div>
                  <motion.div
                    whileInView={{opacity: [0,1]}}
                    transition={{duration: 0.5}}
                    className='app__skills-exp-work'
                    data-tooltip-id={experience.work[0].name}
                  >
                    <h4 className='p-text jobtitle'>{experience.work[0].name}</h4>
                    <p className='p-text company'>{experience.work[0].company}</p>
                    <p className='p-text year'>{experience.year}</p>
                  </motion.div>
                  <Tooltip
                    id={experience.work[0].name}
                    className="skills-tooltip "
                    place="top"
                  >
                    {experience.work[0].description}
                  </Tooltip>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
};

export default AppWrapper(MotionWrap(Skills),'skills');