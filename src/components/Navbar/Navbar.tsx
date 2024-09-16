import logo from '../../assets/logo.svg';
import styles from './navbar.module.scss';

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="logo" />
            <button>Contact Us
                <span>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9297 5.92993L20.9997 11.9999L14.9297 18.0699" stroke="#0C4B54" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 12H20.83" stroke="#0C4B54" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </button>
        </div>
    )
}
