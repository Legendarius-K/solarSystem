import React, { useState, useEffect } from 'react';
import styles from './ArrowMoon.module.css';
import arrow from '../../assets/images/downarrow.png';

const ArrowMoon = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const newRotation = scrollY * 0.4;
        setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  const handleClick = () => {
    window.scrollTo({ top: 420, behavior: 'smooth' });
  };

  return (
    <div onClick={handleClick} className={styles.arrowCircle}>
        <img src={arrow} alt="downarrow" width="30px" height="30px" />
      <div className={`${styles.innerCircle} `} style={{ transform: `rotate(${rotation}deg)` }}>
      </div>
    </div>
  );
};

export default ArrowMoon;
