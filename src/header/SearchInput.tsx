import React, { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className={styles.searchContainer}>
      <img src="/assets/icons/search.svg" alt="Search" className={styles.icon} />
      <input
        type="text"
        placeholder="Поиск товаров"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default SearchInput;
