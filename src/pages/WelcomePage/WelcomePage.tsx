import React from 'react';
import styles from './WelcomePage.module.scss';

import { WelcomeBrief } from '../../components/WelcomeBrief/WelcomeBrief';

export const WelcomePage: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.pageBox}>
        <WelcomeBrief />
      </div>
    </React.Fragment>
  );
};
