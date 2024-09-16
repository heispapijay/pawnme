import Marquee from 'react-fast-marquee';
import styles from './brands.module.scss';
import stellar from '../../assets/stellar.svg';

export const Brands = () => {
  return (
    <div className={styles.wrapper}>
        <p>Trusted by thousands of Users and companies</p>
        <Marquee className={styles.marq}>
          <img src={stellar} alt="stellar logo" />
          <img src={stellar} alt="stellar logo" />
          <img src={stellar} alt="stellar logo" />
          <img src={stellar} alt="stellar logo" />
          <img src={stellar} alt="stellar logo" />
          <img src={stellar} alt="stellar logo" />
        </Marquee>
    </div>
  )
}
