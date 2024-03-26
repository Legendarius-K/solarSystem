import React, { useRef, useEffect, useState } from 'react';
import { getImageURL } from '../../utils/functions';
import { motion } from 'framer-motion';
import styles from './PlanetOverview.module.css';

const PlanetOverview = ({ name, info, image, order, choosePlanet }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update isVisible state when element enters or leaves viewport
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3, // Percentage of the element visible in the viewport to trigger the animation
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function to disconnect observer
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const handleClick = () => {
        choosePlanet(name);
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={handleClick}
            className={styles.planetOverview}
        >
            <h2>{order}: {name}</h2>
            <div className={styles.planetInfo}>
                <img src={getImageURL(image)} alt="planet image" />
                <p>{info}</p>
            </div>
        </motion.div>
    );
};

export default PlanetOverview;
