import styles from './Planet.module.css'
import { getImageURL } from '../../utils/functions';

const Planet = ({name, order, distanceFromSun, size, composition, maxTemperature, minTemperature, gravity, info, image}) => {
    return (
        <div className={`${styles.planet} ${styles[name]}`}>
            <img className={styles.planetImg} src={getImageURL(image)} alt={`An image of ${name}`} />
                    <h2>{name}</h2>
            <div className={styles.planetFlex}>
                <div className={styles.planetDescription}>
                    <p>{info}</p>
                </div>
                <div className={styles.planetInfo}>
                    <p><span>Composition: </span>{composition}</p>
                    <p><span>Order: </span>{order}</p>
                    <p><span>Distance from the Sun: </span>{distanceFromSun}</p>
                    <p><span>Size: </span>{size}</p>
                    <p><span>Maximum Temperature: </span>{maxTemperature}</p>
                    <p><span>Minimum Temperature: </span>{minTemperature}</p>
                    <p><span>Gravity: </span>{gravity}</p>
                </div>
            </div>
        </div>
    )
};

export default Planet
