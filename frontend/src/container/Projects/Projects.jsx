import React, { useState, useEffect } from 'react';
import "./Projects.scss";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

// const Categories = ['all', 'web development', 'machine learning', 'c++', 'python'];

const Projects = () => {
  const [Categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [Projects, setProjects] = useState([]);
  const [FilterProjects, setFilterProjects] = useState([]);

  useEffect(() => {

    const query = '*[_type == "projects"]';

    client.fetch(query)
    .then((data) => {
      let categ = [];
      // Fetching all the Tags available in the datbase
      data.forEach((item) => {
        item.tags.forEach((tag) => {
          if(!categ.includes(tag)){
            categ.push(tag);
          }
        });
      });

      // Removing duplicate tags added an ddd
      setCategories(categ.sort());
      setProjects(data);
      setFilterProjects(data);
    })
    .catch(console.error);

  }, []);
  

  const handleProjectsFilter = (category) => {
      setActiveFilter(category);
      setAnimateCard([{y: 100, opacity: 0}]);
      setTimeout(() => {
        setAnimateCard([{y: 0, opacity: 1}]);
        if(category === 'all'){
          setFilterProjects(Projects);
        }else{
          setFilterProjects(Projects.filter((project) => project.tags.includes(category)));
        }
      }, 500);
  }

  return (
    <div id='projects' className='app__projects'>
      <h2 className='head-text'>
        Portfolio of 
        <span> Projects</span> 
      </h2>
      <div className='app__projects-filter'>
        {
          Categories.map((category, index) => (
            <div 
              key={index}
              onClick={() => handleProjectsFilter(category)}
              className={`app__projects-filter-item app__flex p-text ${activeFilter === category? 'item-active': ''}`}
            >
              {category}
            </div>
          ))
        }
      </div>
      <motion.div 
        className='app__projects-cards'
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
      >
        {
          FilterProjects.map((project, index) => (
            <a href={project.codelink} target='_blank' rel='noreferrer' key={index}>
              <div
                className='app__projects-item app__flex'
              >
                <div className='app__projects-img app__flex'>
                  <img src={urlFor(project.imgURL)} alt={project.name} />
                  <motion.div
                    whileHover={{opacity: [0,1]}}
                    transition={{duration: 0.25, ease: 'easeOut' ,staggerChildren: 0.5}}
                    className='app__projects-hover app__flex'
                  >
                    <a href={project.projectLink} target='_blank' rel='noreferrer'>
                      <motion.div 
                        whileInView={{scale: [0,1]}}
                        whileHover={{scale: [1,0.9]}}
                        transition={{duration: 0.25, ease: 'easeOut' ,staggerChildren: 0.5}}
                        className='app__flex'
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={project.codelink} target='_blank' rel='noreferrer'>
                      <motion.div 
                        whileInView={{scale: [0,1]}}
                        whileHover={{scale: [1,0.9]}}
                        transition={{duration: 0.25, ease: 'easeOut' ,staggerChildren: 0.5}}
                        className='app__flex'
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div> 
                <div className='app__projects-content app__flex '>
                  <h4 className='bold-text project-title'>{project.title}</h4>
                  <p className='p-text desc' style={{marginTop: 10}}>{project.description}</p>
                  <div className='app__projects-tag app__flex'>
                    <p className='p-text'>{`#${project.tags[0]}`}</p>
                  </div>
                </div>
              </div>
            </a>
          ))
        }

      </motion.div>
    </div>
  )
}

export default AppWrapper( MotionWrap(Projects), 'projects');