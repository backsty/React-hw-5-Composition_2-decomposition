import React from 'react';
import { IFeaturedArticle } from '../../types';
import styles from '../../styles/components/News/FeaturedArticle.module.css';

/**
 * Компонент для отображения популярной статьи справа от новостей
 */
const FeaturedArticle: React.FC<IFeaturedArticle> = ({ title, subtitle, image, link }) => {
  return (
    <div className={styles.featured}>
      <a href={link} className={styles.featuredLink}>
        <img src={image} alt={title} className={styles.featuredImage} />
        <div className={styles.featuredContent}>
          <h3 className={styles.featuredTitle}>{title}</h3>
          <p className={styles.featuredSubtitle}>{subtitle}</p>
        </div>
      </a>
    </div>
  );
};

export default FeaturedArticle;
