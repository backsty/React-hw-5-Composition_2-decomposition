import React from 'react';
import { ILocation } from '../../../types';
import styles from '../../../styles/components/Widgets/Location.module.css';

const Location: React.FC = () => {
  const locationData: ILocation = {
    id: 1,
    title: 'Карта Германии',
    link: '#',
  };

  return (
    <div className={styles.locationWidget}>
      <a href={locationData.link} className={styles.locationMap}>
        <h3 className={styles.title}>{locationData.title}</h3>
      </a>
      <a href="#" className={styles.schedule}>
        Расписание
      </a>
    </div>
  );
};

export default Location;
