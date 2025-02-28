import React from 'react';
import { ISearchExample } from '../../types';
import styles from '../../styles/components/Search/SearchExample.module.css';

/**
 * Компонент примера поиска
 */
const SearchExample: React.FC = () => {
  const example: ISearchExample = {
    text: 'фаза луны сегодня',
    description: 'Найдётся всё. Например, ',
  };

  return (
    <div className={styles.example}>
      <span className={styles.description}>{example.description}</span>
      <a href="#" className={styles.text}>
        {example.text}
      </a>
    </div>
  );
};

export default SearchExample;
