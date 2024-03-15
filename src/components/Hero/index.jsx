import styles from './Hero.module.css'
import arrow from '../../assets/images/downarrow.png'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1>Hubble Space Telescope</h1>
            <h2>Embark on a Journey of Discovery</h2>
            <div className={styles.arrowCircle}>
                <div className={styles.innerCircle}>
                    <img src={arrow} alt="downarrow" width="30px" height="30px" />
                </div>
            </div>    
        </div>
    )
};

export default Hero
