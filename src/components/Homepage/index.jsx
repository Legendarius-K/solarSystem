import styles from './Homepage.module.css'
import Hero from '../Hero';
import HomeInfo from '../HomeInfo';

const Homepage = () => {
    return (
        <>
            <Hero headline="Hubble Space Telescope" subheadline="Embark on a Journey of Discovery" />
            <HomeInfo />
        </>

        
    )
};

export default Homepage
