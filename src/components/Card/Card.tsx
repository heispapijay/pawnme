import icon from '../../assets/forward.svg';
import shield from '../../assets/shield.svg';
import styles from './card.module.scss';
import archive from '../../assets/archive.svg';

export const Card = () => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>Instant Cash</p>
            <div className={styles.main}>
                <img src={icon} alt="icon" />
                <p>Get quick access to cash without affecting your credit score</p>
            </div>
        </div>
    )
}

export const Card2 = () => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>Secure and Transparent</p>
            <div className={styles.main2}>
                <img src={shield} alt="icon" />
                <p>Enjoy a secure and transparent lending process with blockchain technology</p>
            </div>
        </div>
    )
}

export const Card3 = () => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>Asset-Based Lending</p>
            <div className={styles.main}>
                <img src={archive} alt="icon" />
                <p>Use your valuable possessions as collateral to secure a loan</p>
            </div>
        </div>
    )
}