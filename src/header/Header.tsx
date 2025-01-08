import React from 'react';
import HeaderMenu from './HeaderMenu';
import SearchInput from './SearchInput';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>магаз</div>
      <img src="/assets/icons/blackSearch.svg" alt="Search" className={styles.iconBlack} />
      <SearchInput />
      <HeaderMenu />
    </header>
  );
};

export default Header;
