import React, { useState, useEffect } from 'react';
import styles from './ArrowMoon.module.css';
import arrow from '../../assets/images/downarrow.png';
import spaceship from '../../assets/images/spaceship.png';

const ArrowMoon = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newRotation = scrollY * 0.5;
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
        <div onClick={handleClick} className={styles.arrowCircle} style={{ transform: `rotate(${rotation}deg)` }}>
            <img className={styles.spaceship} src={spaceship} alt="" />
            <img src={arrow} alt="downarrow" width="30px" height="30px" style={{ transform: `rotate(-${rotation}deg)` }} />
            <div className={`${styles.innerCircle} `} style={{ transform: `rotate(${rotation}deg)` }}></div>
        </div>
    );
};

export default ArrowMoon;
