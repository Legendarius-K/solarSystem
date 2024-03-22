import styles from './PlanetOverview.module.css'
import { getImageURL } from '../../utils/functions';

const PlanetOverview = ({ name, info, image, order, choosePlanet  }) => {

    const handleClick = () => {
        choosePlanet(name)
    }

    return (
        <div onClick={handleClick} className={styles.planetOverview}>
                <h2>{order}: {name}</h2>
            <div className={styles.planetInfo}>
                <img src={getImageURL(image)} alt="planet image" />
                <p>{info}</p>
            </div>
        </div>
    )
};

export default PlanetOverview
