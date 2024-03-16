import styles from './Info.module.css'

const Info = ({headline, span, article, classname}) => {
    return (
        <div className={`${styles[classname]}`}>
            <h2>{headline}</h2>
            <p><span>{span}</span>{article}</p>
        </div>
    )
};

export default Info
