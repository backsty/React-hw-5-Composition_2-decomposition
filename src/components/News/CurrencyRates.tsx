import React from 'react';
import { ICurrencyRate } from '../../types';
import styles from '../../styles/components/News/CurrencyRates.module.css';

/**
 * Компонент курсов валют
 */
const CurrencyRates: React.FC = () => {
  const rates: ICurrencyRate[] = [
    { id: 'usd', name: 'USD', value: 63.52, change: '+0.09', source: 'MOEX' },
    { id: 'eur', name: 'EUR', value: 70.86, change: '+0.14', source: 'MOEX' },
    { id: 'oil', name: 'НЕФТЬ', value: 64.9, change: '+1.63%', source: 'MOEX' },
  ];

  return (
    <div className={styles.rates}>
      {rates.map((rate) => (
        <span key={rate.id} className={styles.rate}>
          <span className={styles.name}>{rate.name}</span>
          <span className={styles.value}>{rate.value}</span>
          <span className={styles.source}>MOEX</span>
          <span className={styles.change}>{rate.change}</span>
        </span>
      ))}
    </div>
  );
};

export default CurrencyRates;
