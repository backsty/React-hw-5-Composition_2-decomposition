import React from 'react';
import { IVisitedTopic } from '../../../types';
import styles from '../../../styles/components/Widgets/VisitedTopics.module.css';

/**
 * Компонент для отображения посещаемых разделов
 */
const VisitedTopics: React.FC = () => {
  const topics: IVisitedTopic[] = [
    {
      id: 1,
      category: 'Недвижимость',
      title: 'о сталинках',
      link: '#',
    },
    {
      id: 2,
      category: 'Маркет',
      title: 'люстры и светильники',
      link: '#',
    },
    {
      id: 3,
      category: 'Авто.ру',
      title: 'привод 4х4 до 500 000',
      link: '#',
    },
  ];

  return (
    <div className={styles.topicsWidget}>
      <h3 className={styles.title}>Посещаемое</h3>
      <div className={styles.topicsList}>
        {topics.map((topic) => (
          <a key={topic.id} href={topic.link} className={styles.topic}>
            <span className={styles.category}>{topic.category}</span>
            <span className={styles.separator}>–</span>
            <span className={styles.topicTitle}>{topic.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VisitedTopics;
