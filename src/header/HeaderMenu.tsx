import React from 'react';
import styles from './HeaderMenu.module.css';

const HeaderMenu: React.FC = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <a href="#basket">
            <img src="/assets/icons/basket.svg" alt="Basket" className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="#deliveries">
            <img src="/assets/icons/deliveries.svg" alt="Deliveries" className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="#favorites">
            <img src="/assets/icons/favorites.svg" alt="Favorites" className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="#user">
            <img src="/assets/icons/user.svg" alt="User" className={styles.icon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
