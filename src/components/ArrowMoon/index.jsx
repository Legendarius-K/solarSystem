import React, { useState, useEffect } from 'react';
import styles from './ArrowMoon.module.css';
import arrow from '../../assets/images/downarrow.png';
import spaceship from '../../assets/images/spaceship.png';

const ArrowMoon = () => {
    const [arrowRotation, setArrowRotation] = useState(0);
    const [innerCircleRotation, setInnerCircleRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const arrowNewRotation = scrollY * 0.8; // Twice as fast rotation for arrowCircle
            const innerCircleNewRotation = scrollY * 0.4; // Normal rotation for innerCircle
            setArrowRotation(arrowNewRotation);
            setInnerCircleRotation(innerCircleNewRotation);
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
        <div onClick={handleClick} className={styles.arrowCircle} style={{ transform: `rotate(${arrowRotation}deg)` }}>
            <img className={styles.spaceship} src={spaceship} alt="" />
            <img src={arrow} alt="downarrow" width="30px" height="30px" />
            <div className={`${styles.innerCircle} `} style={{ transform: `rotate(${innerCircleRotation}deg)` }}></div>
        </div>
    );
};

export default ArrowMoon;
