
import Info from '../Info';
import styles from './HomeInfo.module.css'

const HomeInfo = () => {
    return (
        <div className={styles.homeInfo}>
            <div className={styles.homeInfoContainer}>
                <Info classname={"solarSystemInfo"} headline={"Learn more about our solar system"} span={"Welcome to our solar system, "} article={"a mesmerizing ensemble of planets, moons, asteroids, and comets orbiting around the Sun. At its heart lies the Sun, a dazzling star radiating energy, warmth, and light, around which eight planets gracefully dance in their respective orbits. From the fiery intensity of Mercury to the frozen landscapes of Neptune, each planet boasts its own unique features and mysteries waiting to be explored. Beyond the planets, countless moons, dwarf planets, and celestial bodies add to the splendor of our cosmic neighborhood. Join us on a journey through space and discover the wonders of our solar system."} />
                <Info classname={"websiteInfo"} headline={"Space through the eyes of Hubble"} span={"Experience the splendor "} article={"of our solar system through the lens of the Hubble Telescope on our website. Navigate effortlessly through our user-friendly interface to access a treasure trove of information and captivating images. Explore detailed profiles of planets, moons, and other celestial bodies, enhanced by stunning visuals captured by the Hubble. Whether you're fascinated by the icy moons of Jupiter or the swirling storms of Venus, immerse yourself in the wonders of our cosmic neighborhood, all conveniently available at your fingertips."} />
            </div>
            <button className={styles.readMore}>Read More</button>
        </div>
    )
};

export default HomeInfo
