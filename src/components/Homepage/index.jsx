import styles from './Homepage.module.css'
import Hero from '../Hero';
import HomeInfo from '../HomeInfo';

const Homepage = ({solarSystemToggle}) => {
    return (
        <>
            <div className={styles.homePage}>
                <Hero headline="Hubble Space Telescope" subheadline="Embark on a Journey of Discovery" heroClass="heroHome" />
                <HomeInfo solarSystemToggle={solarSystemToggle}/>
            </div>    
        </>
    )
};

export default Homepage
