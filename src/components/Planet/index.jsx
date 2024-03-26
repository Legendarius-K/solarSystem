import styles from './Planet.module.css'
import { getImageURL } from '../../utils/functions';
import { motion } from 'framer-motion'

const Planet = ({name, order, distanceFromSun, size, composition, maxTemperature, minTemperature, gravity, info, image, youtubeURL}) => {
    return (
        <div className={`${styles.planet} ${styles[name]}`}>
            <img className={styles.planetImg} src={getImageURL(image)} alt={`An image of ${name}`} />
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >{name}
                    </motion.h2>
            <div className={styles.planetFlex}>
                <div className={styles.planetDescription}>
                    <motion.p
                        initial={{ opacity: 0, x: -175 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >{info}
                    </motion.p>
                </div>
                <motion.div 
                    initial={{ opacity: 0, x: 175 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                className={styles.planetInfo}>
                    <p><span>Composition: </span>{composition}</p>
                    <p><span>Order: </span>{order}</p>
                    <p><span>Distance from the Sun: </span>{distanceFromSun}</p>
                    <p><span>Size: </span>{size}</p>
                    <p><span>Maximum Temperature: </span>{maxTemperature}</p>
                    <p><span>Minimum Temperature: </span>{minTemperature}</p>
                    <p><span>Gravity: </span>{gravity}</p>
                </motion.div>
            </div>
            <div className={styles.planetVideo} >
                <iframe allowFullScreen
                    src={youtubeURL}>
                </iframe>
            </div>
        </div>
    )
};

export default Planet
