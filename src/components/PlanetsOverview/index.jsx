import styles from './PlanetOverview.module.css'
import { getImageURL } from '../../utils/functions';
import { motion } from 'framer-motion'

const PlanetOverview = ({ name, info, image, order, choosePlanet  }) => {

    const handleClick = () => {
        choosePlanet(name)
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={handleClick} className={styles.planetOverview}>
            <h2>{order}: {name}</h2>
            <div className={styles.planetInfo}>
                <img src={getImageURL(image)} alt="planet image" />
                <p>{info}</p>
            </div>
        </motion.div>
    )
};

export default PlanetOverview
