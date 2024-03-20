import styles from './Hero.module.css'
import arrow from '../../assets/images/downarrow.png'

const Hero = ({headline, subheadline, heroClass}) => {

    const handleClick = () => {
        window.scrollTo({ top: 420, behavior: 'smooth' });
    }

    return (
        <div className={`${styles.hero} ${styles[heroClass]}`}>
            <h1>{headline}</h1>
            <h2>{subheadline}</h2>
            <div onClick={handleClick} className={styles.arrowCircle}>
                <div className={styles.innerCircle}>
                    <img src={arrow} alt="downarrow" width="30px" height="30px" />
                </div>
            </div>    
        </div>
    )
};

export default Hero

