import styles from './Hamburger.module.css'

const Hamburger = ({changePage, closeHamburger}) => {

    const handleClick = (pageView) => {
        changePage(pageView)
        closeHamburger()
    }

    return (
        <div className={styles.hamburger}>
            <ul className={styles.hamburgerUl}>
                <li onClick={() => handleClick(null)}>Home</li>
                <li onClick={() => handleClick("solarSystem")}>Our Solar System</li>
                <li onClick={() => handleClick("planetsOverview")}>Planets Overview</li>
                <li onClick={() => handleClick("mercury")}>Mercury</li>
                <li onClick={() => handleClick("venus")}>Venus</li>
                <li onClick={() => handleClick("earth")}>Earth</li>
                <li onClick={() => handleClick("mars")}>Mars</li>
                <li onClick={() => handleClick("jupiter")}>Jupiter</li>
                <li onClick={() => handleClick("saturn")}>Saturn</li>
                <li onClick={() => handleClick("uranus")}>Uranus</li>
                <li onClick={() => handleClick("neptune")}>Neptune</li>
                <li onClick={() => handleClick("pluto")}>Pluto</li>
            </ul>
        </div>
    )
};

export default Hamburger
