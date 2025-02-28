import React from 'react';
import { INewsCategory } from '../../types';
import styles from '../../styles/components/News/NewsCategories.module.css';

/**
 * Компонент категорий новостей
 */
const NewsCategories: React.FC = () => {
  const categories: INewsCategory[] = [
    { id: 1, name: 'Сейчас в СМИ', active: true, date: '31 июля, среда 02:32' },
    { id: 2, name: 'в Германии', active: false, date: '31 июля, среда 02:32' },
    { id: 3, name: 'Рекомендуем', active: false, date: '31 июля, среда 02:32' },
  ];

  return (
    <div className={styles.categories}>
      <nav className={styles.nav}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.category} ${category.active ? styles.active : ''}`}
          >
            {category.name}
          </button>
        ))}
      </nav>
      <span className={styles.date}>{categories[0].date}</span>
    </div>
  );
};

export default NewsCategories;
