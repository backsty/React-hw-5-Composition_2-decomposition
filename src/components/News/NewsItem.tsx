import React from 'react';
import { INewsItem } from '../../types';
import styles from '../../styles/components/News/NewsItem.module.css';

/**
 * Компонент отдельной новости
 */
const NewsItem: React.FC<INewsItem> = ({ title, link, source }) => {
  return (
    <div className={styles.newsItem}>
      <img src={source.icon} alt={source.name} className={styles.icon} />
      <a href={link} className={styles.link}>
        {title}
      </a>
    </div>
  );
};

export default NewsItem;
