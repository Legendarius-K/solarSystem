import styles from './PlanetOverview.module.css'
import { getImageURL } from '../../utils/functions';

const PlanetOverview = ({ name, info, image  }) => {
    return (
        <div className={styles.planetOverview}>
                <h2>{name}</h2>
            <div className={styles.planetInfo}>
                <p>{info}</p>
                <img src={getImageURL(image)} alt="planet image" />
            </div>
        </div>
    )
};

export default PlanetOverview
