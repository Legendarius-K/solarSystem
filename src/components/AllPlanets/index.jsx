import PlanetOverview from '../PlanetsOverview';
import styles from './AllPlanets.module.css'
import { planets } from '../../data/data';

const AllPlanets = ({ choosePlanet }) => {
    return (
        <div className={styles.allPlanetsContainer}>
            <h2 className={styles.allPlanetsHeadline}>– All Planets –</h2>
            <div className={styles.allPlanets}>
                {planets.map((planet, index) => <PlanetOverview choosePlanet={choosePlanet} key={index} {...planet} order={index + 1} /> )}
            </div>
        </div>
    )
};

export default AllPlanets
 