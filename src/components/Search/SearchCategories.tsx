import React from 'react';
import { ISearchCategory } from '../../types';
import styles from '../../styles/components/Search/SearchCategories.module.css';

/**
 * Компонент категорий поиска
 */
const SearchCategories: React.FC = () => {
  const categories: ISearchCategory[] = [
    { id: 1, name: 'Видео', link: '#' },
    { id: 2, name: 'Картинки', link: '#' },
    { id: 3, name: 'Новости', link: '#' },
    { id: 4, name: 'Карты', link: '#' },
    { id: 5, name: 'Маркет', link: '#' },
    { id: 6, name: 'Переводчик', link: '#' },
    { id: 7, name: 'Эфир', link: '#' },
    { id: 8, name: 'ещё', link: '#' },
  ];

  return (
    <nav className={styles.categories}>
      {categories.map((category) => (
        <a key={category.id} href={category.link} className={styles.category}>
          {category.name}
        </a>
      ))}
    </nav>
  );
};

export default SearchCategories;
