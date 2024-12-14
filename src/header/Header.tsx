import React from 'react';
import HeaderMenu from './HeaderMenu';
import SearchInput from './SearchInput';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>магаз</div>
      <SearchInput />
      <HeaderMenu />
    </header>
  );
};

export default Header;
