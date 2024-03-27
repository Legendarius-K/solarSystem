import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from './Hero.module.css';
import ArrowMoon from '../ArrowMoon';
import ufo from '../../assets/images/ufo.svg';
import cosmicReef from '../../assets/videos/Cosmic_Reef_trimmed.mp4';
import cosmicReefWide from '../../assets/videos/Cosmic_Reef_trimmed.mov';
import mobileHero from '../../assets/images/heroSpace.png'

const Hero = ({ headline, subheadline, heroClass }) => {
    const [scale, setScale] = useState(1);
    const [largeScreen, setLargeScreen] = useState(false);
    const [mobileScreen, setMobileScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setLargeScreen(screenWidth > 1025);
            setMobileScreen(screenWidth <= 500); 
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${styles.hero} ${styles[heroClass]}`}>
            {largeScreen &&
                <video className={styles.videoBG} autoPlay muted loop>
                    <source src={cosmicReefWide} type="video/webm" />
                </video>
            }
            {!largeScreen && !mobileScreen &&
                <video className={styles.videoBG} autoPlay muted loop>
                    <source src={cosmicReef} type="video/webm" />
                </video>
            }
            {mobileScreen && <img className={styles.videoBG} src={mobileHero} alt="Mobile Hero image"/>}
            <motion.h1
                style={{ scale: scale }}
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
            >
                {headline}
            </motion.h1>
            <motion.h2
                style={{ scale: scale }}
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
            >
                {subheadline}
            </motion.h2>
            <ArrowMoon />
            <motion.img
                initial={{ y: 0, x: 0, scale: 1 }}
                animate={{ y: -300, x: 320, scale: 0 }}
                transition={{ duration: 4, delay: 2 }}
                className={styles.ufo}
                src={ufo}
                alt="ufo"
                width="60px"
            />
        </div>
    );
};

export default Hero;
