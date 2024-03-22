import styles from './Nav.module.css'
import nasaLogo from "../../assets/images/hs-logo-nasa.png"
import hamburger from "../../assets/images/hamburger-menu.png"
import Hamburger from '../Hamburger';
import { useState } from 'react';

const Nav = ({backHome, changePage}) => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const handleClick = () => {
        backHome()
        setHamburgerOpen(false)
    }

    return (
        <nav className={styles.nav}>
            <img onClick={handleClick} className={styles.nasaLogo} src={nasaLogo} alt="Space image" />
            <div onClick={toggleHamburger} className={styles.menu}>
                <img className={`${hamburgerOpen ? styles.spin : ''}`} src={hamburger} alt="hamburger" width="22px" height="22px" />
                <h3>Menu</h3>
            </div>
            { <Hamburger changePage={changePage} closeHamburger={setHamburgerOpen} isOpen={hamburgerOpen} xHamburger={setHamburgerOpen} /> }
        </nav>
    )
};

export default Nav
 