import { useState } from 'react';
import styles from './Hamburger.module.css'

const Hamburger = ({changePage, closeHamburger, isOpen, xHamburger}) => {

    const [secondLevel, setSecondLevel] = useState(false)

    const handleClick = (pageView) => {
        changePage(pageView)
        closeHamburger()
    }

    const handleClickHamburger = () => {
        xHamburger(false)
    }

    const handleClickSecondLevel = () => {
        setSecondLevel(!secondLevel)
    }

    

    return (
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
            <ul className={styles.hamburgerUl}>
                <h3 onClick={handleClickHamburger}>X</h3>
                <li onClick={() => handleClick(null)}>Home</li>
                <li onClick={() => handleClick("solarSystem")}>Our Solar System</li>
                <li onClick={() => handleClick("allPlanets")}>All Planets</li>
                <li onClick={handleClickSecondLevel} >Planets &#x21a6;
                    <div className={`${styles.secondLevel} ${secondLevel ? styles.secondLevelOpen : ""}`}>
                        <ul>
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
                </li>
            </ul>
        </div>
    )
};

export default Hamburger
