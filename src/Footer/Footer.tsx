import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>© 2023 Магаз</div>
      <div className={styles.links}>
        <p className={styles.text}>support@magaz.ru</p>
        <div className={styles.link}>
          <img src="public/assets/png/tg.png" alt="" />
          <img src="public/assets/png/dzen.png" alt="" />
          <img src="public/assets/png/yt.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
