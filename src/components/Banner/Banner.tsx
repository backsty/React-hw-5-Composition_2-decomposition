import React from 'react';
import { IBanner } from '../../types';
import styles from '../../styles/components/Banner/Banner.module.css';
import bannerImage from '../../assets/img/Hobs_and_Show-film.jpg';

/**
 * Компонент рекламного баннера фильма
 */
const Banner: React.FC = () => {
  const bannerData: IBanner = {
    id: 1,
    title: 'Хоббс и Шоу',
    image: bannerImage,
    link: 'https://www.kinopoisk.ru/film/1044450/',
  };

  return (
    <div className={styles.banner}>
      <a
        href={bannerData.link}
        className={styles.bannerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={bannerData.image} alt={bannerData.title} className={styles.bannerImage} />
      </a>
    </div>
  );
};

export default Banner;
