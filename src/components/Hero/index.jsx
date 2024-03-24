import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import ArrowMoon from '../ArrowMoon';

const Hero = ({ headline, subheadline, heroClass }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * -0.0025; 
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.hero} ${styles[heroClass]}`}>
      <h1 style={{ transform: `scale(${scale})` }}>{headline}</h1>
      <h2 style={{ transform: `scale(${scale})` }}>{subheadline}</h2>
      <ArrowMoon />
    </div>
  );
};

export default Hero;
