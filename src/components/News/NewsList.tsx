import React from 'react';
import NewsItem from './NewsItem';
import { INewsItem } from '../../types';
import styles from '../../styles/components/News/NewsList.module.css';
import RiaNewsSvg from '../../assets/img/ria_news.svg';
import RGRUIco from '../../assets/img/rg_ru.ico';
import KommersantSvg from '../../assets/img/kommersant.svg';
import NewspaperSvg from '../../assets/img/newspaper.svg';

/**
 * Компонент списка новостей
 */
const NewsList: React.FC = () => {
  const news: INewsItem[] = [
    {
      id: 1,
      title: 'Путин упростил получение автомобильных номеров',
      link: '#',
      source: { icon: RiaNewsSvg, name: 'РИА' },
    },
    {
      id: 2,
      title: 'В команде Зеленского раскрыли план реформ на Украине',
      link: '#',
      source: { icon: RiaNewsSvg, name: 'РИА' },
    },
    {
      id: 3,
      title: '«Турпомощь» прокомментировала гибель десятков россиян в Анталье',
      link: '#',
      source: { icon: RGRUIco, name: 'rgru' },
    },
    {
      id: 4,
      title: 'Суд закрыл дело Демпартии США против России',
      link: '#',
      source: { icon: KommersantSvg, name: 'kommersant' },
    },
    {
      id: 5,
      title: 'На Украине призвали создать ракеты для удара по Москве',
      link: '#',
      source: { icon: NewspaperSvg, name: 'Газета' },
    },
  ];

  return (
    <div className={styles.newsList}>
      {news.map((item) => (
        <NewsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NewsList;
