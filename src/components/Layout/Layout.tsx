import React from 'react';
import { NewsBlock } from '../News';
import { SearchBlock } from '../Search';
import { Banner } from '../Banner';
import { Weather } from '../Widgets/Weather';
import { VisitedTopics } from '../Widgets/Topics';
import { TVProgram } from '../Widgets/TV';
import { Broadcast } from '../Widgets/Broadcast';
import { Location } from '../Widgets/Location';
import styles from '../../styles/layout/Layout.module.css';

const Layout: React.FC = () => {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.topSection}>
        <NewsBlock />
      </div>
      <div className={styles.searchSection}>
        <SearchBlock />
      </div>
      <div className={styles.bannerSection}>
        <Banner />
      </div>

      <div className={styles.widgetsSection}>
        <div className={styles.widgetsLeft}>
          <Weather />
          <VisitedTopics />
        </div>
        <div className={styles.widgetsCenter}>
          <Location />
          <TVProgram />
        </div>
        <div className={styles.widgetsRight}>
          <Broadcast />
        </div>
      </div>
    </div>
  );
};

export default Layout;
