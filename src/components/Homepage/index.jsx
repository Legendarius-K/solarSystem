import styles from './Homepage.module.css'
import Hero from '../Hero';
import HomeInfo from '../HomeInfo';

const Homepage = ({solarSystemToggle}) => {
    return (
        <>
            <Hero headline="Hubble Space Telescope" subheadline="Embark on a Journey of Discovery" heroClass="heroHome" />
            <HomeInfo solarSystemToggle={solarSystemToggle}/>
        </>
    )
};

export default Homepage
