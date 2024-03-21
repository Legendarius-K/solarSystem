import PlanetOverview from '../PlanetsOverview';
import styles from './AllPlanets.module.css'
import { planets } from '../../data/data';

const AllPlanets = ({ }) => {
    return (
        <div className={styles.allPlanets}>
            {planets.map((planet, index) => <PlanetOverview key={index} {...planet} /> )}
        </div>
    )
};

export default AllPlanets
