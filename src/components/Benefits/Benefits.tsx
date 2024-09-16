import { Card, Card2, Card3 } from '../Card/Card';
import styles from './benefits.module.scss';

export const Benefits = () => {
    return (
        <div className={styles.benefits}>
            <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>Benefits You Get Using <span>PawnMe</span> Platform</h2>
                <p>Unlock the full potential of your assets and achieve your financial goals with our secure, transparent, and efficient platform.</p>
            </div>
            <div className={styles.cards}>
                <Card />
                <Card2 />
                <Card3 />
            </div>
        </div>
        </div>
    )
}
