import React from 'react';
import { IBroadcast } from '../../../types';
import styles from '../../../styles/components/Widgets/Broadcast.module.css';
import playIcon from '../../../assets/img/mx_player_14082.png';

const Broadcast: React.FC = () => {
  const broadcasts: IBroadcast[] = [
    {
      id: 1,
      title: 'Управление как искусство',
      channel: 'Успех',
      icon: playIcon,
    },
    {
      id: 2,
      title: 'Ночь. Мир в это время',
      channel: 'earthTV',
      icon: playIcon,
    },
    {
      id: 3,
      title: 'Андрей Возн...',
      channel: 'Совершенно секретно',
      icon: playIcon,
    },
  ];

  return (
    <div className={styles.broadcastWidget}>
      <h3 className={styles.title}>Эфир</h3>
      <div className={styles.broadcastList}>
        {broadcasts.map((broadcast) => (
          <a key={broadcast.id} href="#" className={styles.broadcast}>
            <span className={styles.playIcon}>▶</span>
            <div className={styles.broadcastContent}>
              <span className={styles.broadcastTitle}>{broadcast.title}</span>
              <span className={styles.channel}>{broadcast.channel}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Broadcast;
