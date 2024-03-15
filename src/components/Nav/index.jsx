import styles from './Nav.module.css'
import nasaLogo from "../../assets/images/hs-logo-nasa.png"
import hamburger from "../../assets/images/hamburger-menu.png"

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <img src={nasaLogo} alt="Space image" />
            <div className={styles.menu}>
                <img src={hamburger} alt="hamburger" width="22px" height="22px" />
                <h3>MENU</h3>
            </div>
        </nav>
    )
};

export default Nav
