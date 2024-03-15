import styles from './Footer.module.css'
import stsci from '../../assets/images/stsci-logo.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.nasaInfo}>
                <p><span>The NASA Hubble Space Telescope</span> is a project of international cooperation between NASA and ESA. AURA’s Space Telescope Science Institute in Baltimore, Maryland, conducts Hubble science operations.</p>
            </div>    
            <div className={styles.footerMain}>
                <a href="https://www.stsci.edu/" target="blank"><img src={stsci} alt="Stsci logo" width="330px" height="auto" /></a>
                <div className={styles.footerInfo1}>
                    <a href="">About Us</a>
                    <a href="">Glossary</a>
                    <a href="">Copyright</a>
                </div>
                <div className={styles.footerInfo2}>
                    <a href="">Contact Us</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Sitemap</a>
                </div>
                <div className={styles.social}>

                </div>
            </div>
        </div>
    )
};

export default Footer
