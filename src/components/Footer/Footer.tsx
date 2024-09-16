import logo from '../../assets/logo.svg';
import styles from './footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.cta}>
                    <p>Get in Touch</p>
                    <h3>Let's talk</h3>
                    <h4>Feel free to contact us</h4>
                    <button>Contact Us
                        <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9297 5.92993L20.9997 11.9999L14.9297 18.0699" stroke="#0C4B54" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 12H20.83" stroke="#0C4B54" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
                <hr />
                <div className={styles.but}>
                    <img src={logo} alt="logo" />
                    <p>© 2024 PawnMe. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};