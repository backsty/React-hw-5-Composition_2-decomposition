import React from 'react';
import { IWeather } from '../../../types';
import styles from '../../../styles/components/Widgets/Weather.module.css';
import weatherIcon from '../../../assets/img/rain_weather_icon_151998.svg';

/**
 * Компонент виджета погоды
 */
const Weather: React.FC = () => {
  const weather: IWeather = {
    current: '+17°',
    morning: 'Утром +17',
    afternoon: 'днём +20',
    icon: weatherIcon,
  };

  return (
    <div className={styles.weatherWidget}>
      <h3 className={styles.title}>Погода</h3>
      <a href="#" className={styles.weather}>
        <i className={styles.icon}>
          <img src={weather.icon} alt="Погода" />
        </i>
        <div className={styles.info}>
          <span className={styles.current}>{weather.current}</span>
          <div className={styles.details}>
            <span>{weather.morning},</span>
            <span>{weather.afternoon}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Weather;
