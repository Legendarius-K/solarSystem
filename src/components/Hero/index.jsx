import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from './Hero.module.css';
import ArrowMoon from '../ArrowMoon';

const Hero = ({ headline, subheadline, heroClass }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 - scrollY * 0.0025; 
      setScale(newScale > 0 ? newScale : 0.01); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.hero} ${styles[heroClass]}`}>
      <motion.h1
        style={{ scale: scale }}
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {headline}
      </motion.h1>
      <motion.h2
        style={{ scale: scale }}
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {subheadline}
      </motion.h2>
      <ArrowMoon />
    </div>
  );
};

export default Hero;
