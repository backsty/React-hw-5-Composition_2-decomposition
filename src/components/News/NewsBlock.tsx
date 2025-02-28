import React from 'react';
import NewsCategories from './NewsCategories';
import NewsList from './NewsList';
import CurrencyRates from './CurrencyRates';
import FeaturedArticle from './FeaturedArticle';
import { IFeaturedArticle } from '../../types';
import styles from '../../styles/components/News/NewsBlock.module.css';
import image from '../../assets/img/math.jpeg';

/**
 * Компонент, отвечающий за отображение блока новостей
 */
const NewsBlock: React.FC = () => {
  const featuredArticle: IFeaturedArticle = {
    id: 1,
    title: 'Работа над ошибками',
    subtitle: 'Смотрите на Яндексе и запоминайте',
    image: image,
    link: '#',
  };

  return (
    <div className={styles.newsBlock}>
      <div className={styles.mainContent}>
        <NewsCategories />
        <NewsList />
        <CurrencyRates />
      </div>
      <FeaturedArticle {...featuredArticle} />
    </div>
  );
};

export default NewsBlock;
