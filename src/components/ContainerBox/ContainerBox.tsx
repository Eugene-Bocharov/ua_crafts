import React from 'react';
import styles from './ContainerBox.module.scss';

import { ContainerBoxProps } from '../../declarations/types/ComponentsProps';

export const ContainerBox: React.FC<ContainerBoxProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>{children}</div>
    </React.Fragment>
  );
};
