import styles from './Hero.module.css'
import ArrowMoon from '../ArrowMoon';

const Hero = ({headline, subheadline, heroClass}) => {

    return (
        <div className={`${styles.hero} ${styles[heroClass]}`}>
            <h1>{headline}</h1>
            <h2>{subheadline}</h2>
            <ArrowMoon />   
        </div>
    )
};

export default Hero

