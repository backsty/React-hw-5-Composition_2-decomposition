import React from 'react';
import SearchCategories from './SearchCategories';
import SearchBar from './SearchBar';
import SearchExample from './SearchExample';
import styles from '../../styles/components/Search/SearchBlock.module.css';

/**
 * Компонент поискового блока
 */
const SearchBlock: React.FC = () => {
  return (
    <div className={styles.SearchBlock}>
      <SearchCategories />
      <SearchBar />
      <SearchExample />
    </div>
  );
};

export default SearchBlock;
