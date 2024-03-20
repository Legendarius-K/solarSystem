import styles from './ReadMoreBtn.module.css'

const ReadMoreBtn = ({pageView, solarSystemToggle}) => {

    const handleClick = () => {
        solarSystemToggle(pageView);
        window.scrollTo({ top: 60, behavior: 'smooth' });
    }
    return (
        <button onClick={handleClick} className={styles.readMore}>{ pageView ? "Read More" : "Go Back" }</button>
    )
};

export default ReadMoreBtn
