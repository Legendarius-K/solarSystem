import styles from './SolarSystem.module.css'
import Hero from '../Hero';
import Info from '../Info';
import solarSystemImage from "../../assets/images/solar-system-order.jpg"
import ReadMoreBtn from '../ReadMoreBtn';

const SolarSystem = ({solarSystemToggle}) => {
    return (
        
        <div className={styles.solarSystem}>
            <Hero headline="Our Solar System" heroClass="heroSolarSystem" />
            <div className={styles.solarSystemContainer}>
                <Info classname={"solarSystemInfo"}  span={"Welcome to our solar system, "} article={"a mesmerizing ensemble of planets, moons, asteroids, and comets orbiting around the Sun. At its heart lies the Sun, a dazzling star radiating energy, warmth, and light, around which eight planets gracefully dance in their respective orbits. From the fiery intensity of Mercury to the frozen landscapes of Neptune, each planet boasts its own unique features and mysteries waiting to be explored. Beyond the planets, countless moons, dwarf planets, and celestial bodies add to the splendor of our cosmic neighborhood. Join us on a journey through space and discover the wonders of our solar system."} />
                <Info classname={"solarSystemInfo"}  span={"Delving further into the intricacies of our solar system, "} article={"we uncover a wealth of marvels beyond the familiar planets. Moons, with their diverse landscapes and geological features, orbit their parent bodies, offering insights into the dynamics of planetary systems. Dwarf planets, such as Pluto, exist on the fringes, captivating astronomers with their enigmatic properties. Asteroids and comets, remnants of the early solar system, journey through space, occasionally intersecting with the paths of planets. Each celestial body tells a story of cosmic evolution and challenges our understanding of the universe. Join us on a cosmic odyssey as we unravel the mysteries of our solar system and beyond."} />
            </div>
            <img className={styles.solarSystemImage} src={solarSystemImage} alt="solar system order and sizes" width="500px" />
            <div className={styles.solarSystemContainer2}>
                <Info classname={"solarSystemInfo"} headline="Order and Size" span={"The order of planets in our solar system, "} article="from closest to farthest from the Sun, is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. This arrangement follows a pattern based on their distances from the Sun, known as the planetary order. Each planet differs significantly in size, with the gas giants—Jupiter and Saturn—dominating the system. Jupiter, the largest planet, is over 11 times wider than Earth and boasts a colossal mass exceeding that of all other planets combined. Saturn follows closely, renowned for its majestic rings that span vast distances around its equator. The terrestrial planets—Mercury, Venus, Earth, and Mars—are smaller and primarily composed of rock and metal. Earth, the only planet known to support life, sits comfortably within the habitable zone, fostering a diverse array of ecosystems. Understanding the sizes of these planets helps contextualize their significance within our solar system's dynamic landscape." />
                <ReadMoreBtn pageView={null} solarSystemToggle={solarSystemToggle} />
            </div>
        </div>
    )
};

export default SolarSystem
