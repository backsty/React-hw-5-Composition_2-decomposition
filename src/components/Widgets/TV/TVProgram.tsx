import React from 'react';
import { ITVProgram } from '../../../types';
import styles from '../../../styles/components/Widgets/TVProgram.module.css';
import etherIcon from '../../../assets/img/ether.svg';

const TVProgram: React.FC = () => {
  const programs: ITVProgram[] = [
    {
      id: 1,
      time: '02:00',
      title: 'ТНТ.Best',
      channel: 'ТНТ International',
      icon: 'тнт.svg',
    },
    {
      id: 2,
      time: '02:15',
      title: 'Джинглики',
      channel: 'Карусель INT',
      icon: 'карусель.svg',
    },
    {
      id: 3,
      time: '02:30',
      title: 'Наедине со всеми',
      channel: 'Первый',
      icon: 'первый.svg',
    },
  ];

  return (
    <div className={styles.tvWidget}>
      <h3 className={styles.title}>
        Телепрограмма
        <img src={etherIcon} alt="Эфир" className={styles.etherIcon} />
      </h3>
      <div className={styles.programList}>
        {programs.map((program) => (
          <a key={program.id} href="#" className={styles.program}>
            <span className={styles.time}>{program.time}</span>
            <div className={styles.programInfo}>
              <span className={styles.programTitle}>{program.title}</span>
              <span className={styles.channel}>{program.channel}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TVProgram;
