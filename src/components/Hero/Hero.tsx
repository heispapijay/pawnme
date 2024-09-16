import styles from './Hero.module.scss';
import avatar from '../../assets/Users.png';
import mobile from '../../assets/phone.png';
import bg from '../../assets/bg.png';
import bgl from '../../assets/bgl.png';
import { Brands } from '../Brands/Brands';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p className={styles.tag}>#1 Top Online Pawn Loan Service</p>
          <h1 className={styles.title}>Unlock the value of  your assets with <span>PawnMe</span></h1>
          <img className={styles.users} src={avatar} alt="users" />
          <p className={styles.text}>Leverage your valuable possessions for instant financial relief. Empower your investments with higher returns.</p>
          <button>Join Waitlist
            <span>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9297 5.92993L20.9997 11.9999L14.9297 18.0699" stroke="#0C4B54" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 12H20.83" stroke="#0C4B54" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>
        <img className={styles.mobile} src={mobile} alt="phone mock up" />
      </div>
      <div>
        <img className={styles.bgl} src={bgl} alt="bg-image" />
        <img className={styles.bg} src={bg} alt="bg-image" />
      </div>
      <Brands />
    </div>
  )
}
