import styles from './Hamburger.module.css'

const Hamburger = ({changePage, closeHamburger}) => {

    const handleClick = (pageView) => {
        changePage(pageView)
        closeHamburger()
    }

    return (
        <div className={styles.hamburger}>
            <ul className={styles.hamburgerUl}>
                <li onClick={() => handleClick("solarSystem")}>Our Solar System</li>
                <li>Mercury</li>
                <li>Venus</li>
                <li>Earth</li>
                <li>Mars</li>
                <li>Jupiter</li>
                <li>Saturn</li>
                <li>Uranus</li>
                <li>Neptune</li>
                <li>Pluto</li>
            </ul>
        </div>
    )
};

export default Hamburger
