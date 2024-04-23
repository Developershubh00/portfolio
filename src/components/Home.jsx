import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import style from './styles/home.module.css';
import { fadeIn, staggerContainer } from '../utils/motion';

const Home = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <div className={style.container}>
      <p className={style.intro}>
        Hey 👋, I&apos;m
        {' '}
        <motion.span variants={fadeIn('', '', 0.1, 1)} className={style.name}>
          Shubh
        </motion.span>
      </p>
      <p className={style.intro}>
        Techie &
        {' '}
        <motion.span variants={fadeIn('', '', 0.3, 1)} className={style.name}>
          Developer
        </motion.span>
      </p>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.desc}>
        I am a full-stack web developer (MERN), React-Native developer, ML enthusiast and a Cloudie-Nerd.
      </motion.p>
      <motion.button
        variants={fadeIn('', '', 0.6, 1)}
        className={style.btn_container}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <span className={style.btn_hover}>
        Know more about me!
        </span>
        <span className={style.btn}>
          Know more about me!
        </span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
    </div>
  </motion.section>
);

export default Home;
