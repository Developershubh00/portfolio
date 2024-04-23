import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>About Me</motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn('left', '', 0, 1)} className={style.para}>
        <p className={style.text}>
        👋 Myself,
          {' '}
          <a href="https://www.linkedin.com/in/developershubh/" target="_blank" className={style.link} rel="noreferrer">Shubham Saxena</a>
          {' '}
          As a passionate MERN full-stack developer and AI/ML enthusiast, I thrive on crafting cutting-edge solutions that blend innovation with seamless user experiences. My journey in the tech world has been enriched by diverse experiences, including being the proud owner of MrsaxenaProduction, a dynamic film production, and marketing agency. It's in this entrepreneurial venture that I honed my skills in creativity and strategic thinking, shaping narratives that captivated audiences worldwide.
        </p>
        <p className={style.text}>In my role as a Google Creator @Notes of 2024, I had the incredible opportunity to visit the Google office, gaining insights and inspiration from the heart of tech innovation. This experience ignited my passion for pushing boundaries and embracing new challenges.</p>
        <p className={style.text}>
Currently, I'm passionately immersed in my latest project: HUNGERIFY - an effortless food ordering application set to revolutionize the way we experience dining. With a vision to redefine convenience and delight, Hungerify aims to seamlessly integrate technology into the culinary world, making food ordering a delightful experience for all.</p>
      </motion.div>
      <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Shubh" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
